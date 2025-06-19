import { Request, Response } from 'express';
import { db } from '../firebase';
import { getNewListId, validateName } from '../utils/utils';
import type { QueryDocumentSnapshot, DocumentData, WriteBatch } from 'firebase-admin/firestore';
import { createList } from '../../shared/models/ListModel';

let currentListOrder = 0;

// Create a new list under a project
export const createListController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists) 
      return res.status(404).json({ error: 'Project not found' });
    if (projectSnap.data()?.uid !== uid) 
      return res.status(403).json({ error: 'Forbidden' });

    const name = validateName(req.body.name);
    if (!name) 
      return res.status(400).json({ error: 'Invalid list name' });

    // Ensure unique within the project
    const dupSnap = await projectRef
      .collection('lists')
      .where('name', '==', name)
      .get();
    if (!dupSnap.empty) 
      return res.status(400).json({ error: 'Duplicate list name' });

    const listId = getNewListId();
    const list = createList({
      id: listId,
      uid,
      name,
      projectId: projectid,
      isUniversal: false,
      order: currentListOrder++,
    });

    await projectRef.collection('lists').doc(listId).set(list);
    res.status(201).json({ list });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch all lists for a project
export const getListsController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists) 
      return res.status(404).json({ error: 'Project not found' });
    if (projectSnap.data()?.uid !== uid) 
      return res.status(403).json({ error: 'Forbidden' });

    const listsSnap = await projectRef.collection('lists').get();
    const lists = listsSnap.docs.map((d: QueryDocumentSnapshot<DocumentData>) => d.data());
    res.status(200).json({ lists });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch one list by ID
export const getListController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists) 
      return res.status(404).json({ error: 'Project not found' });
    if (projectSnap.data()?.uid !== uid) 
      return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists) 
      return res.status(404).json({ error: 'List not found' });

    res.status(200).json({ list: listSnap.data()! });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Rename a list
export const updateListController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists || projectSnap.data()?.uid !== uid) 
      return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists) 
      return res.status(404).json({ error: 'List not found' });

    const name = validateName(req.body.name);
    if (!name) 
      return res.status(400).json({ error: 'Invalid list name' });

    // Check duplicate
    const dupSnap = await projectRef
      .collection('lists')
      .where('name', '==', name)
      .get();
    if (!dupSnap.empty && dupSnap.docs[0].id !== listid) 
      return res.status(400).json({ error: 'Duplicate list name' });

    await listRef.update({ name });
    const updated = await listRef.get();
    res.status(200).json({ list: updated.data()! });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a list
export const deleteListController = async (req: Request, res: Response) => {
  try {
    const uid = (req as any).user.uid;
    const { projectid, listid } = req.params;

    const projectRef = db.collection('projects').doc(projectid);
    const projectSnap = await projectRef.get();
    if (!projectSnap.exists) 
      return res.status(404).json({ error: 'Project not found' });
    if (projectSnap.data()?.uid !== uid) 
      return res.status(403).json({ error: 'Forbidden' });

    const listRef = projectRef.collection('lists').doc(listid);
    const listSnap = await listRef.get();
    if (!listSnap.exists) 
      return res.status(404).json({ error: 'List not found' });
    if (listSnap.data()?.isUniversal) 
      return res.status(400).json({ error: 'Cannot delete Do Now list' });

    // Must leave at least one non-universal list
    const otherLists = await projectRef
      .collection('lists')
      .where('isUniversal', '==', false)
      .get();
    if (otherLists.size <= 1) 
      return res.status(400).json({ error: 'Must have at least one other list' });

    await listRef.delete();
    res.status(200).json({ message: 'List deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
