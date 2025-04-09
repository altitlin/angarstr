import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import * as Routing from 'shared/constants/routing';
import { ScrollToTop } from 'shared/ui/scroll-to-top';

import { ROUTES, renderRouteTree } from './routes';

import styles from './styles/frame.module.scss';

export const ApplicationFrame: React.FC = () => {
  return (
    <div className={styles.frame}>
      <ScrollToTop />
      <Header />
      <main>
        <React.Suspense fallback={<div />}>
          <Routes>
            {ROUTES.map(renderRouteTree)}
            <Route path="*" element={<Navigate replace to={Routing.ROUTE_MAIN} />} />
          </Routes>
        </React.Suspense>
      </main>
      <Footer />
    </div>
  )
};
