import React from 'react';
import { BrowserRouter } from 'react-router';

import { ApplicationFrame } from './frame';

import './styles/index.scss';

export const Entry: React.FC = () => {
  return (
    <BrowserRouter>
      <ApplicationFrame />
    </BrowserRouter>
  );
};
