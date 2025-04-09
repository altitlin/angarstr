import React from 'react';

import { useWorkImages } from 'entries/work';
import { ImageGallery } from 'shared/ui/image-gallery';

import styles from './styles.module.scss'

const WorkPage = () => {
  const workImages = useWorkImages();

  return (
    <section className={styles.works}>
      <header>
        <h1>Наши работы</h1>
      </header>
      <article className={styles.container}>
        <ImageGallery images={workImages} />
      </article>
    </section>
  )
}

export default WorkPage
