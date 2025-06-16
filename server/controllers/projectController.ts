import { Request, Response } from 'express'
import { db } from '../firebase'
import { getNewProjId, getNewListId, validateName } from '../utils/utils'
import { createProject } from '../models/ProjectModel'
import { createList } from '../models/ListModel'
import type { QueryDocumentSnapshot, DocumentData, WriteBatch } from 'firebase-admin/firestore'

let currentProjOrder = 0
let currentListOrder = 0

export const createProjectController = async (req: Request, res: Response) => {
  try {
    const uid = req.user!.uid
    const name = validateName(req.body.name)
    if (!name) return res.status(400).json({ error: 'Invalid project name' })

    const existing = await db
      .collection('projects')
      .where('uid', '==', uid)
      .where('name', '==', name)
      .get()
    if (!existing.empty) return res.status(400).json({ error: 'Duplicate project name' })

    const projId = getNewProjId()
    const projectRef = db.collection('projects').doc(projId)
    const project = createProject({ id: projId, uid, name, order: currentProjOrder++ })
    await projectRef.set(project)

    const defaultLists = ['Do Now', 'Unnamed']
    const batch: WriteBatch = db.batch()

    for (const listName of defaultLists) {
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
    const uid = req.user!.uid
    const snapshot = await db.collection('projects').where('uid', '==', uid).get()

    // explicitly type `doc` so TS knows about `.data()`
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
    const uid = req.user!.uid
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
    const uid = req.user!.uid
    const projectRef = db.collection('projects').doc(req.params.id)
    const docSnap = await projectRef.get()
    if (!docSnap.exists) return res.status(404).json({ error: 'Project not found' })

    const project = docSnap.data()!
    if (project.uid !== uid) return res.status(403).json({ error: 'Forbidden' })

    const updates: Partial<Record<string, any>> = {}

    if (req.body.name !== undefined) {
      const name = validateName(req.body.name)
      if (!name) return res.status(400).json({ error: 'Invalid name' })

      const dup = await db
        .collection('projects')
        .where('uid', '==', uid)
        .where('name', '==', name)
        .get()
      if (!dup.empty && dup.docs[0].id !== req.params.id)
        return res.status(400).json({ error: 'Duplicate name' })

      updates.name = name
    }

    if (req.body.description !== undefined) {
      updates.description = req.body.description
    }

    await projectRef.update(updates)
    const updatedSnap = await projectRef.get()
    res.status(200).json({ project: updatedSnap.data()! })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

export const deleteProjectController = async (req: Request, res: Response) => {
  try {
    const uid = req.user!.uid
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
