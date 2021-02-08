import React, { useState } from 'react';
import { FaPizzaSlice, FaBars } from 'react-icons/fa';
import { AddTask } from '../components';

export function Header({ darkMode, setDarkMode, showSidebar, setShowSidebar }) {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header">
      <nav>
        <div className="features">
          <div className="toggle" onClick={() => setShowSidebar(!showSidebar)}>
            <FaBars />
          </div>
          <div className="logo">
            <img src="./images/logo.png" alt="Todoist" />
          </div>
        </div>
        <div className="settings">
          <ul>
            <li
              className="settings__add"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
            >
              +
            </li>
            <li
              className="settings__darkmode"
              onClick={() => setDarkMode(!darkMode)}
            >
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
}
