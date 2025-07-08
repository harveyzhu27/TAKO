import { useEffect, useState } from 'react';
import { getProjects, createProject, getFullProjectData } from './api/projects';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [newName, setNewName] = useState('');
  console.log('check that im using ProjectsPage')

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  // Example: Fetch all lists, tasks, and subtasks for a selected project
  // (Assume selectedProjectId is available)
  //
  // useEffect(() => {
  //   if (!selectedProjectId) return;
  //   getFullProjectData(selectedProjectId)
  //     .then(data => {
  //       // data.lists is an array of lists, each with .tasks, each with .subtasks
  //       setLists(data.lists);
  //     })
  //     .catch(console.error);
  // }, [selectedProjectId]);
  //
  // const [lists, setLists] = useState([]);

  const handleCreate = async () => {
    try {
      const proj = await createProject(newName);
      setProjects(p => [...p, proj]);
      setNewName('');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">My Projects</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id} className="mb-2">
            {p.name}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder="New project name"
          className="border p-1"
        />
        <button onClick={handleCreate} className="ml-2 p-1 bg-blue-500 text-white rounded">
          Create
        </button>
      </div>
    </div>
  );
}
