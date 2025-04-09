import React from 'react';
import { Link } from 'react-router';

import * as Routing from 'shared/constants/routing';
import { Navbar } from 'widgets/navbar';

import logo from 'app/assets/images/logo.webp';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={Routing.ROUTE_MAIN}>
          <img alt="Логотип сайта" src={logo} />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
