import React from 'react';
import { Header, Content } from './layouts';
import { ProjectsProvider, SelectedProjectProvider } from './contexts';

export function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}
