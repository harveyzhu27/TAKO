import { Request, Response } from 'express'
import { db } from '../firebase'
import { getNewProjId, getNewListId, validateName } from '../utils/utils'
import type { QueryDocumentSnapshot, DocumentData, WriteBatch } from 'firebase-admin/firestore'
import { createProject } from "../../shared/models/ProjectModel";
import { createList } from "../../shared/models/ListModel"

let currentProjOrder = 0
let currentListOrder = 0

export const createProjectController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid

    const name = validateName(req.body.name)
    if (!name) return res.status(400).json({ error: 'Invalid project name' })

    const existing = await db
      .collection('projects')
      .where('uid', '==', uid)
      .where('name', '==', name)
      .get()
    if (!existing.empty) return res.status(400).json({ error: 'Duplicate project name' })

    const latest = await db.collection('projects')
      .where('uid', '==', uid)
      .orderBy('order', 'desc')
      .limit(1)
      .get();

    const lastOrder = latest.empty ? 0 : latest.docs[0].data().order;
    const nextOrder = lastOrder + 100;

    const projId = getNewProjId();
    const project = createProject({ id: projId, uid, name, order: nextOrder });
    const projectRef = db.collection('projects').doc(projId)

    // batch all writes together
    const batch: WriteBatch = db.batch()
    batch.set(projectRef, project)

    for (const listName of ['Do Now', 'Unnamed']) {
      const listId = getNewListId()
      const list = createList({
        id: listId,
        uid,
        name: listName,
        projectId: projId,
        isUniversal: listName === 'Do Now',
        order: currentListOrder++,
      })
      batch.set(projectRef.collection('lists').doc(listId), list)
    }

    await batch.commit()
    res.status(201).json({ project })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

export const getAllProjectsController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid
    const snapshot = await db.collection('projects').where('uid', '==', uid).get()

    const projects = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) =>
      doc.data()
    )

    res.status(200).json({ projects })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

export const getProjectByIdController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid
    const docSnap = await db.collection('projects').doc(req.params.id).get()
    if (!docSnap.exists) return res.status(404).json({ error: 'Project not found' })

    const project = docSnap.data()!
    if (project.uid !== uid) return res.status(403).json({ error: 'Forbidden' })

    const listsSnap = await db
      .collection('projects')
      .doc(req.params.id)
      .collection('lists')
      .get()

    project.lists = listsSnap.docs.map((d: QueryDocumentSnapshot<DocumentData>) =>
      d.data()
    )

    res.status(200).json({ project })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateProjectController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const projectRef = db.collection('projects').doc(req.params.id);
    const docSnap = await projectRef.get();

    if (!docSnap.exists) return res.status(404).json({ error: 'Project not found' });

    const project = docSnap.data()!;
    if (project.uid !== uid) return res.status(403).json({ error: 'Forbidden' });

    const updates: Partial<Record<string, any>> = {};

    // Handle name update
    if (req.body.name !== undefined) {
      const name = validateName(req.body.name);
      if (!name) return res.status(400).json({ error: 'Invalid name' });

      const dup = await db
        .collection('projects')
        .where('uid', '==', uid)
        .where('name', '==', name)
        .get();

      if (!dup.empty && dup.docs[0].id !== req.params.id) {
        return res.status(400).json({ error: 'Duplicate name' });
      }

      updates.name = name;
    }

    // Handle description update
    if (req.body.description !== undefined) {
      updates.description = req.body.description;
    }

    // Handle move up/down
    if (req.body.move === "up" || req.body.move === "down") {
      const direction = req.body.move;
      const currentOrder = project.order;

      const query = db.collection('projects')
        .where('uid', '==', uid)
        .where('order', direction === "up" ? '<' : '>', currentOrder)
        .orderBy('order', direction === "up" ? 'desc' : 'asc')
        .limit(1);

      const neighborSnap = await query.get();

      if (!neighborSnap.empty) {
        const neighborDoc = neighborSnap.docs[0];
        const neighborRef = neighborDoc.ref;
        const neighborOrder = neighborDoc.data().order;

        const batch = db.batch();

        if (neighborOrder !== currentOrder) {
          batch.update(projectRef, { order: neighborOrder });
          batch.update(neighborRef, { order: currentOrder });
          await batch.commit();
        }

        // Rebalance if spacing is tight
        const allProjectsSnap = await db.collection('projects')
          .where('uid', '==', uid)
          .orderBy('order')
          .get();

        let tooClose = false;
        for (let i = 1; i < allProjectsSnap.docs.length; i++) {
          const prev = allProjectsSnap.docs[i - 1].data().order;
          const curr = allProjectsSnap.docs[i].data().order;
          if (curr - prev <= 1) {
            tooClose = true;
            break;
          }
        }

        if (tooClose) {
          const rebalanceBatch = db.batch();
          allProjectsSnap.docs.forEach((doc, i) => {
            const newOrder = (i + 1) * 100;
            const current = doc.data().order;
            if (newOrder !== current) {
              rebalanceBatch.update(doc.ref, { order: newOrder });
            }
          });
          await rebalanceBatch.commit();
        }

        const updatedSnap = await projectRef.get();
        return res.status(200).json({ project: updatedSnap.data()! });
      }
    }

    // Fallback regular field update
    if (Object.keys(updates).length > 0) {
      await projectRef.update(updates);
    }

    const updatedSnap = await projectRef.get();
    res.status(200).json({ project: updatedSnap.data()! });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


export const deleteProjectController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid
    const projectRef = db.collection('projects').doc(req.params.id)
    const docSnap = await projectRef.get()
    if (!docSnap.exists) return res.status(404).json({ error: 'Project not found' })

    const project = docSnap.data()!
    if (project.uid !== uid) return res.status(403).json({ error: 'Forbidden' })

    const batch: WriteBatch = db.batch()
    const listsSnap = await projectRef.collection('lists').get()
    listsSnap.docs.forEach((ld: QueryDocumentSnapshot<DocumentData>) =>
      batch.delete(ld.ref)
    )
    batch.delete(projectRef)
    await batch.commit()

    res.status(200).json({ message: 'Project deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

export const rebalanceProjectsController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;

    const snapshot = await db.collection('projects')
      .where('uid', '==', uid)
      .orderBy('order')
      .get();

    if (snapshot.empty) {
      return res.status(200).json({ message: 'No projects to rebalance' });
    }

    const batch: WriteBatch = db.batch();

    snapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>, i) => {
      const newOrder = (i + 1) * 100;
      batch.update(doc.ref, { order: newOrder });
    });

    await batch.commit();

    res.status(200).json({ message: 'Projects rebalanced successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to rebalance projects' });
  }
};