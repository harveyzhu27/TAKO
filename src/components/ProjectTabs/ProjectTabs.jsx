import React, { useState } from 'react';
import './ProjectTabs.css';
function ProjectTabs({
    projects,
    currentProject,
    addProject,
    setCurrentProject,
}) {
    const [newProjectName, setProjectName] = useState("");
    const [showAddOptions, setShowAddOption] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showHomeScreen, setShowHomeScreen] = useState(false);
    const sortedProjects = Object.values(projects).sort((a, b) => a.order - b.order)

    return (
        <div className="project-tabs-container">
            <button
                className={showHomeScreen ? 'active-home-tab' : 'home-tab'}
                onClick={() => {
                    setShowHomeScreen(true);
                    setCurrentProject("");
                    setShowAddOption(false);
                    console.log(`Clicked on Home`)

                }}>Home</button>
            {sortedProjects.map((project) => {
                return (
                    <button
                        key={project.id}
                        onClick={() => {
                            setCurrentProject(project.id);
                            setShowHomeScreen(false);
                            setShowAddOption(false);
                            console.log(`Clicked on ${project.name}`)
                        }
                        }
                        className={(currentProject === project.id) ? 'active-tab' : 'basic-tab'}
                    >
                        {project.name}
                    </button>
                )
            }
            )}
            {showAddOptions ? (
                <div className='show-add-options-block'>
                    <input
                        className='add-project-box'
                        autoFocus
                        value={newProjectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        onKeyDown={async (e) => {
                            if (e.key === 'Enter') {
                                const success = await addProject(newProjectName.trim())
                                if (!success) {
                                    setErrorMessage('Project name already exists')
                                    return;
                                }
                                console.log(`Successfully added project ${newProjectName.trim()}`)
                                setProjectName("");
                                // TODO Set new project as current project
                                // TODO Name doesn't go away upon pressing enter, and puts previous name in text box
                                setShowAddOption(false);
                                setErrorMessage("");
                            }
                            if (e.key === 'Escape') {
                                console.log(`Escape was pressed`);
                                setProjectName("");
                                setShowAddOption(false);
                                setErrorMessage("");
                            }
                        }} />
                    {errorMessage &&
                        <div className='error-message'>{errorMessage}</div>}
                </div>
            ) : (
                <button
                    autoFocus
                    className='basic-tab'
                    onClick={() => {
                        setCurrentProject("");
                        setShowAddOption(true)
                        setShowHomeScreen(false)
                    }}>Add</button>
            )}
        </div>
    )
}

export default ProjectTabs;