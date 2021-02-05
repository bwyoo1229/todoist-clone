import { useState, useEffect } from 'react';
import { firebase } from '../libs/firebase';
import { getCollatedTasks } from '../helpers';
import moment from 'moment';

function isProjectIdNotCollatedTasks(projectId) {
  if (projectId && !getCollatedTasks(projectId)) {
    return true;
  }
}

export function useTasks(projectId) {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    const userQuery = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'testUser1');

    let projectQuery = isProjectIdNotCollatedTasks(projectId)
      ? userQuery.where('projectId', '==', projectId)
      : projectId === 'TODAY'
      ? userQuery.where('date', '==', moment().format('DD/MM/YYYY'))
      : projectId === 'INBOX' || projectId === 0
      ? userQuery.where('date', '==', '')
      : userQuery;

    projectQuery = projectQuery.onSnapshot(
      snapshot => {
        const newTasks = snapshot.docs.map(task => ({
          ...task.data(),
          id: task.id,
        }));

        setTasks(
          projectId === 'NEXT_7_DAYS'
            ? newTasks.filter(
                task =>
                  moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                  task.archived === false
              )
            : newTasks.filter(task => task.archived === false)
        );

        setArchivedTasks(newTasks.filter(task => task.archive === true));
      },
      error => {
        throw new Error(error.message);
      }
    );

    return () => projectQuery();
  }, [projectId]);

  return { tasks, archivedTasks };
}
