import React from 'react';
import { Sidebar, Tasks } from '../';

export function Content() {
  return (
    <section>
      <Sidebar />
      <Tasks />
    </section>
  );
}
