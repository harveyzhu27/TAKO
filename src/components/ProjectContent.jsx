import React, { Suspense, useMemo } from 'react';
import { sortProjectLists } from '../utils/projectUtils.js';
import List from './List/List.jsx';

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
    setToastError
  }) {
    // Memoize sorted lists to prevent unnecessary re-computations
    const sortedLists = useMemo(() => {
      return sortProjectLists(lists);
    }, [lists]);

    return (
      <div className="list-task-container" role="region" aria-label="Project lists">
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
              // addSubtask={addSubtask}
              // deleteSubtask={deleteSubtask}
              // updateSubtask={updateSubtask}
              listCount={lists.length}
              isLeftmost={idx === 0}
              isRightmost={idx === lists.length - 1}
              setToastError={setToastError}
            />
          </div>
        ))}
      </div>
    );
  }
}));

function ProjectContent(props) {
  return (
    <Suspense fallback={<div className="project-content-loading">Loading project content...</div>}>
      <ProjectContentComponent {...props} />
    </Suspense>
  );
}

export default ProjectContent; 