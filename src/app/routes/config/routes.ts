import React from 'react';

import * as Routing from 'shared/constants/routing';

const MainPage = React.lazy(() => import('pages/main'));
const ContactsPage = React.lazy(() => import('pages/contacts'));
const InformationPage = React.lazy(() => import('pages/information'));
const ScopePage = React.lazy(() => import('pages/scope'));
const WorksPage = React.lazy(() => import('pages/works'));
const WorkPage = React.lazy(() => import('pages/work'));

export const ROUTES = [
  {
    path: Routing.ROUTE_MAIN,
    component: MainPage,
  },
  {
    path: Routing.ROUTE_CONTACTS,
    component: ContactsPage,
  },
  {
    path: Routing.ROUTE_INFORMATION,
    component: InformationPage,
  },
  {
    path: Routing.ROUTE_SCOPE,
    component: ScopePage,
  },
  {
    path: Routing.ROUTE_WORKS,
    component: WorksPage,
  },
  {
    path: `${Routing.ROUTE_WORKS}/:${Routing.PARAMETER_WORK_ID}`,
    component: WorkPage,
  },
];
