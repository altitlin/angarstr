import React from 'react';
import { NavLink } from 'react-router';

import * as Routing from 'shared/constants/routing';

import styles from './styles.module.scss';

export const Navbar = () => (
  <nav className={styles.links}>
    <NavLink
      to={Routing.ROUTE_MAIN}
      className={({ isActive }) => isActive ? styles.active : ''}
    >
      Главная
    </NavLink>
    <NavLink
      to={Routing.ROUTE_SCOPE}
      className={({ isActive }) => isActive ? styles.active : ''}
    >
      Сфера применения
    </NavLink>
    <NavLink
      to={Routing.ROUTE_WORKS}
      className={({ isActive }) => isActive ? styles.active : ''}
    >
      Наши работы
    </NavLink>
    <NavLink
      to={Routing.ROUTE_INFORMATION}
      className={({ isActive }) => isActive ? styles.active : ''}
    >
      Полезная информация
    </NavLink>
    <NavLink
      to={Routing.ROUTE_CONTACTS}
      className={({ isActive }) => isActive ? styles.active : ''}
    >
      Контакты
    </NavLink>
  </nav>
);
