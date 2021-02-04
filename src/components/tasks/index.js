import React from 'react';
import { Checkbox } from '../';
import { useTasks } from '../../hooks';

export function Tasks() {
  const { tasks } = useTasks('1');
  console.log(tasks);

  let projectName = '';

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
    </div>
  );
}
