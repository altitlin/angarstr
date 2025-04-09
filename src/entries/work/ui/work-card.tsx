import React from 'react';
import { Link } from 'react-router';

import * as Routing from 'shared/constants/routing';

import { Work } from '../model/types';

import styles from './styles.module.scss';

type Props = Work;

export const WorkCard: React.FC<Props> = ({ id, images, title }) => (
  <article className={styles.workCard}>
    <Link to={`${Routing.ROUTE_WORKS}/${id}`}>
      <figure>
        <img alt="Картинка ангара" src={images[0]} />
      </figure>
      <div className={styles.content}>
        <h3>{title}</h3>
      </div>
    </Link>
  </article>
);
