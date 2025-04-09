import React from 'react';
import { createRoot } from 'react-dom/client';

const Application = React.lazy(() => import('app'));

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.Suspense fallback={<div />}>
    <Application />
  </React.Suspense>
);
