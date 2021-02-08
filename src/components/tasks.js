import React, { useContext } from 'react';
import { Checkbox } from '.';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { SelectedProjectsContext, ProjectsContext } from '../contexts';
import { getCollatedTasks, getTitle, getCollatedTitle } from '../helpers';
import { AddTask } from '.';

export function Tasks() {
  const { selectedProjects } = useContext(SelectedProjectsContext);
  const { projects } = useContext(ProjectsContext);
  const { tasks } = useTasks(selectedProjects);

  let projectName = '';

  if (projects && selectedProjects && !getCollatedTasks(selectedProjects)) {
    projectName =
      getTitle(projects, selectedProjects) &&
      getTitle(projects, selectedProjects).name;
  }

  if (getCollatedTasks(selectedProjects) && selectedProjects) {
    projectName = getCollatedTitle(collatedTasks, selectedProjects).name;
  }

  return (
    <div className="tasks">
      <h2>{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  );
}
