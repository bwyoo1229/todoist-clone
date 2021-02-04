import React, { useState, useContext } from 'react';
import { SelectedProjectsContext, ProjectsContext } from '../contexts';
import { IndividualProject } from '.';

export function Projects({ activeValue = true }) {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProjects } = useContext(SelectedProjectsContext);
  const { projects } = useContext(ProjectsContext);

  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProjects(project.projectId);
        }}
      >
        <IndividualProject project={project} />
      </li>
    ))
  );
}
