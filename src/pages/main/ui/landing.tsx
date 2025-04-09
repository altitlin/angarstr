import React from 'react';

import { ViewAllWorks } from 'features/view-all-works';
import { StartConstruction } from 'features/start-construction';

import styles from './styles.module.scss';

interface Props {
  onViewAllWorks: () => void;
}

export const Landing: React.FC<Props> = ({ onViewAllWorks }) => {
  const onScroll = React.useCallback((elementId: string) => {
    const targetElement = document.querySelector(elementId);

    targetElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <section className={styles.landing}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Строительство бескаркасных ангаров и карскасных зданий под ключ</h1>
          <p>Проектируем и строим ангары</p>
          <ViewAllWorks title='Посмотреть ангары' className={styles.viewAllWorksBtn} onClick={onViewAllWorks} />
          <StartConstruction className={styles.startButton} onClick={() => onScroll('#intro')} />
        </div>
      </div>
    </section>
  );
};
