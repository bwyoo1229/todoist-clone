import { collatedTasks } from '../constants';

export function isCollatedTasks(projectId) {
  return collatedTasks.find(task => task.key === projectId) ? true : false;
}
