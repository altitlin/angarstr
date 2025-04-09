import React from 'react';

import styles from './styles.module.scss';

interface Props {
  images: string[];
}

export const ImageGallery: React.FC<Props> = ({ images }) => (
  <ul className={styles.images}>
    {images.map((image, idx) => (
      <li key={String(idx)}>
        <figure>
          <img src={image} alt="Картинка ангара" loading='lazy' />
        </figure>
      </li>
    ))}
  </ul>
);
