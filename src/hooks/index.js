import { useState, useEffect } from 'react';
import { firebase } from '../libs/firebase';
import { getCollatedTasks } from '../helpers';
import moment from 'moment';

export function useTasks(projectId) {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    const userQuery = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'testUser1');

    let unsubscribe =
      projectId && !getCollatedTasks(projectId)
        ? userQuery.where('projectId', '==', projectId)
        : projectId === 'TODAY'
        ? userQuery.where('date', '==', moment().format('DD/MM/YYYY'))
        : projectId === 'INBOX' || projectId === 0
        ? userQuery.where('data', '==', '')
        : userQuery;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        projectId === 'NEXT_7_DAYS'
          ? newTasks.filter(
              task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : newTasks.filter(task => task.archived === false)
      );

      setArchivedTasks(newTasks.filter(task => task.archive === true));
    });

    return () => unsubscribe();
  }, [projectId]);

  return { tasks, archivedTasks };
}
