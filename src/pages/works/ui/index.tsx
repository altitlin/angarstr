import React from 'react';

import { useWorks } from 'entries/work';
import { WorkList } from 'widgets/work-list';

import styles from './styles.module.scss'

const WorksPage = () => {
  const works = useWorks();

  return (
    <section className={styles.works}>
      <article className={styles.container}>
        <WorkList works={works} />
      </article>
    </section>
  )
}

export default WorksPage
