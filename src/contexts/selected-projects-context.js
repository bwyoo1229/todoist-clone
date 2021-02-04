import React, { useState, createContext } from 'react';

export const SelectedProjectsContext = createContext();

export function SelectedProjectsProvider({ children }) {
  const { selectedProjects, setSelectedProjects } = useState('INBOX');

  return (
    <SelectedProjectsContext.Provider
      value={{ selectedProjects, setSelectedProjects }}
    >
      {children}
    </SelectedProjectsContext.Provider>
  );
}
