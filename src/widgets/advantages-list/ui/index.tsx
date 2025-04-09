import React from 'react';

import { AdvantageCard, Advantage } from 'entries/advantage';

import styles from './styles.module.scss';

interface Props {
  advantages: Advantage[];
}

export const AdvantagesList: React.FC<Props> = ({ advantages }) => {
  return (
    <div className={styles.list}>
      {advantages.map((advantage, idx) => (
        <AdvantageCard key={String(idx)} {...advantage} />
      ))}
    </div>
  );
};
