import { collatedTasks } from '../constants';

export function getCollatedTasks(projectId) {
  collatedTasks.find(task => task.key === projectId);
}
