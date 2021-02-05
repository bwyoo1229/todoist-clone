import React, { useState, useContext } from 'react';
import { firebase } from '../libs/firebase';
import { generatePushId } from '../helpers';
import { ProjectsContext } from '../contexts';

export function AddProject({ shouldShow = false }) {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('');

  const projectId = generatePushId();
  const { setProjects } = useContext(ProjectsContext);

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({ projectId, name: projectName, userId: 'testUser1' })
      .then(() => {
        setProjects([]);
        setProjectName('');
        setShow(false);
      });

  return (
    <div className="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className="add-project__name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
          >
            Add Project
          </button>
          <span className="add-project__cancel" onClick={() => setShow(false)}>
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span className="add-project__text" onClick={() => setShow(!show)}>
        Add Project
      </span>
    </div>
  );
}
