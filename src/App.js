import React from 'react';
import { Header, Content } from './layouts';
import { ProjectsProvider, SelectedProjectsProvider } from './contexts';

export function App() {
  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectsProvider>
  );
}
