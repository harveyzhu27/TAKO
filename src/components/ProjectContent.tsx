import React, { Suspense, useMemo } from 'react';
import { sortProjectLists } from '../utils/projectUtils.ts';
import List from './List/List.tsx';
import type { List as ListType } from '@shared/models/ListModel';
import type { Task } from '@shared/models/TaskModel';

interface ProjectContentProps {
  currentProject: string;
  lists: ListType[];
  addList: (projectId: string, name: string) => void;
  deleteList: (projectId: string, listId: string) => void;
  updateList: (projectId: string, listId: string, updates: Partial<ListType>) => void;
  moveList: (projectId: string, listId: string, direction: 'left' | 'right') => void;
  addTask: (projectId: string, listId: string, taskName: string, dueDate?: number) => Promise<boolean>;
  deleteTask: (projectId: string, listId: string, taskId: string) => Promise<void>;
  updateTask: (projectId: string, listId: string, taskId: string, updates: Partial<Task>) => Promise<void>;
  reorderTasks: (projectId: string, listId: string, taskIds: string[]) => Promise<void>;
  setToastError: (error: string) => void;
  loadingProjectContent?: boolean;
  loadingTasks?: Set<string>;
}

const ProjectContentComponent = React.lazy(() => Promise.resolve({
  default: function ProjectContentComponent({
    currentProject,
    lists,
    addList,
    deleteList,
    updateList,
    moveList,
    addTask,
    deleteTask,
    updateTask,
    reorderTasks,
    setToastError,
    loadingProjectContent = false,
    loadingTasks = new Set()
  }: ProjectContentProps) {
    // Memoize sorted lists to prevent unnecessary re-computations
    const sortedLists = useMemo(() => {
      return sortProjectLists(lists);
    }, [lists]);

    return (
      <div className="list-task-container" role="region" aria-label="Project lists">
        {loadingProjectContent && (
          <div className="project-content-loading-overlay">
            <div className="loading-spinner">⟳</div>
            <span>Loading project content...</span>
          </div>
        )}
        {sortedLists.map((list, idx) => (
          <div key={list.id} className="list-wrapper">
            <List
              projectId={currentProject}
              list={list}
              lists={lists}
              addList={addList}
              deleteList={deleteList}
              updateList={updateList}
              moveList={moveList}
              addTask={addTask}
              deleteTask={deleteTask}
              updateTask={updateTask}
              reorderTasks={reorderTasks}
              // addSubtask={addSubtask}
              // deleteSubtask={deleteSubtask}
              // updateSubtask={updateSubtask}
              listCount={lists.length}
              isLeftmost={idx === 0}
              isRightmost={idx === lists.length - 1}
              setToastError={setToastError}
              loadingTasks={loadingTasks}
            />
          </div>
        ))}
      </div>
    );
  }
}));

function ProjectContent(props: ProjectContentProps) {
  return (
    <Suspense fallback={<div className="project-content-loading">Loading project content...</div>}>
      <ProjectContentComponent {...props} />
    </Suspense>
  );
}

export default ProjectContent;

