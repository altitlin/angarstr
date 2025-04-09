import React from 'react';

import { Work, WorkCard } from 'entries/work';

import styles from './styles.module.scss';

interface Props {
  works: Work[];
  className?: string;
}

export const WorkList: React.FC<Props> = ({ className, works }) => (
  <ul className={`${styles.workList} ${className}`}>
    {works.map((work) =>
      <li key={work.id}>
        <WorkCard {...work} />
      </li>
    )}
  </ul>
);
