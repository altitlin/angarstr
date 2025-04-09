import React from 'react';

import { MailIcon, PhoneIcon } from 'shared/icons';

import styles from './styles.module.scss';

const ContactsPage = () => {
  return (
    <section className={styles.contacts}>
      <header>
        <h1>Наши контакты</h1>
      </header>
      <div className={styles.wrapper}>
        <article>
          <h2>Как с нами связаться?</h2>
          <p>
            Мы предлагаем строительство бескаркасных ангаров и каркасных зданий под ключ.
            Вы можете связаться с нами по нижеуказанным контактам:
          </p>
          <ul className={styles.listContacts}>
            <li>
              <MailIcon />
              <a href="mailto:angarstr@yandex.ru">angarstr@yandex.ru</a>
            </li>
            <li>
              <PhoneIcon />
              <a href="tel:+79009082777">+7 900 908 27 77</a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
};

export default ContactsPage;
