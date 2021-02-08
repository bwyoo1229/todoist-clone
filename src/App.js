import React, { useState } from 'react';
import { Header, Content } from './layouts';
import { ProjectsProvider, SelectedProjectsProvider } from './contexts';

export function App({ darkModeDefault = false }) {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <main className={darkMode ? 'darkMode' : undefined}>
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <Content showSidebar={showSidebar} />
        </main>
      </ProjectsProvider>
    </SelectedProjectsProvider>
  );
}
