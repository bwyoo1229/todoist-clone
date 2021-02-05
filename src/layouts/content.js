import React from 'react';
import { Sidebar } from '.';
import { Tasks } from '../components';

export function Content() {
  return (
    <section className="content">
      <Sidebar />
      <Tasks />
    </section>
  );
}
