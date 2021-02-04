import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">+</li>
            <li className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
