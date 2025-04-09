import React from 'react';
import { Route } from 'react-router';

export const renderRouteTree = (options: { path: string; component: React.FC }) => {
  const { path, component } = options;

  return React.createElement(
    Route,
    {
      key: path,
      path,
      element: React.createElement(component),
    },
  );
};
