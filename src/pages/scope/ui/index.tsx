import React from 'react';

import { Accordion } from 'shared/ui/accordion';

import { ITEMS } from '../config/scope-items';

import styles from './styles.module.scss';

const ScopePage = () => {
  return (
    <section className={styles.scope}>
      <article className={styles.container}>
        <Accordion items={ITEMS} />
      </article>
    </section>
  );
};

export default ScopePage;
