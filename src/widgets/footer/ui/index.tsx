import React from 'react';
import { Link } from 'react-router';

import logo from 'app/assets/images/logo.webp';
import { MailIcon, PhoneIcon } from 'shared/icons';

import * as Routing from 'shared/constants/routing';
import { getCurrentYear } from 'shared/lib/date';

import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.blockInfo}>
        <Link to={Routing.ROUTE_MAIN}>
          <img alt="Логотип сайта" src={logo} />
        </Link>
        <div className={styles.links}>
          <div className={styles.title}>Angarstr</div>
          <nav className={styles.menu}>
            <Link to={Routing.ROUTE_MAIN}>Главная</Link>
            <Link to={Routing.ROUTE_SCOPE}>Сфера применения</Link>
            <Link to={Routing.ROUTE_WORKS}>Наши работы</Link>
            <Link to={Routing.ROUTE_INFORMATION}>Полезная информация</Link>
            <Link to={Routing.ROUTE_CONTACTS}>Контакты</Link>
          </nav>
        </div>
        <div className={styles.blockContacts}>
          <div className={styles.title}>Как с нами связаться?</div>
          <ul className={styles.contacts}>
            <li>
              <MailIcon />
              <a href="mailto:angarstr@yandex.ru">angarstr@yandex.ru</a>
            </li>
            <li>
              <PhoneIcon />
              <a href="tel:+79009082777">+7 900 908 27 77</a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyRight}>
        {`© ${getCurrentYear()} Angarstr. Все права защищены`}
      </p>
    </footer>
  );
};
