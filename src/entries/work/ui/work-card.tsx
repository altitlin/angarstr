import React from 'react';

import { Work } from '../model/types';

import styles from './styles.module.scss';

type Props = Omit<Work, 'id' | 'images'> & {
  srcImage: string;
};

export const WorkCard: React.FC<Props> = ({ srcImage, title, description }) => (
  <article className={styles.workCard}>
    <figure>
      <img alt="Картинка ангара" src={srcImage} />
    </figure>
    <div className={styles.content}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </article>
);
