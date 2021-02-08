import React, { useContext, useState } from 'react';
import { SelectedProjectsContext } from '../contexts';
import { Projects, AddProject } from '../components';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

export function Sidebar({ showSidebar }) {
  const { setSelectedProjects } = useContext(SelectedProjectsContext);
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className={showSidebar ? 'sidebar' : 'sidebar hide'}>
      <ul className="sidebar__generic">
        <li
          className={active === 'inbox' ? 'active' : undefined}
          onClick={() => {
            setSelectedProjects('INBOX');
            setActive('inbox');
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          className={active === 'today' ? 'active' : undefined}
          onClick={() => {
            setSelectedProjects('TODAY');
            setActive('today');
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          className={active === 'next_7_days' ? 'active' : undefined}
          onClick={() => {
            setSelectedProjects('NEXT_7_DAYS');
            setActive('next_7_days');
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(showProjects => !showProjects)}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
}
