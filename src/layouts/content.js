import React from 'react';
import { Sidebar } from '.';
import { Tasks } from '../components';

export function Content({ showSidebar }) {
  return (
    <section className="content">
      <Sidebar showSidebar={showSidebar} />
      <Tasks />
    </section>
  );
}
