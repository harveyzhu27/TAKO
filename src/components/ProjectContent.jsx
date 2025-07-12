import React, { Suspense } from 'react';
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
    return (
      <div className="list-task-container">
        {lists
          .slice()  // copy before sort
          .sort((a, b) => a.order - b.order)
          .map((list, idx) => (
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