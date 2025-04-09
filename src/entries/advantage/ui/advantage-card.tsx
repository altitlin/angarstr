import React from 'react';

import { Advantage } from '../model/types';

import styles from './styles.module.scss';

export const AdvantageCard: React.FC<Advantage> = ({ title, description }) => (
  <article className={styles.advantageCard}>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);
