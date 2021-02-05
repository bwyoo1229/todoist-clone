import React, { useContext } from 'react';
import { ProjectsContext } from '../contexts';

export function ProjectOverlay({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) {
  const { projects } = useContext(ProjectsContext);

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li
              key={project.projectId}
              onClick={() => {
                setProject(project.projectId);
                setShowProjectOverlay(false);
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
