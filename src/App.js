import React, { useState } from 'react';
import { Header, Content } from './layouts';
import { ProjectsProvider, SelectedProjectsProvider } from './contexts';

export function App({ darkModeDefault = false }) {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <main className={darkMode ? 'darkMode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectsProvider>
  );
}
