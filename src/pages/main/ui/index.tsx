import React from 'react';
import { useNavigate } from 'react-router';

import { useWorks } from 'entries/work';
import { WorkList } from 'widgets/work-list';
import { AdvantagesList } from 'widgets/advantages-list';
import { ViewAllWorks } from 'features/view-all-works';
import * as Routing from 'shared/constants/routing';

import { ADVANTAGES } from '../config/advantages';

import { Landing } from './landing';
import { Intro } from './intro';

import styles from './styles.module.scss';

const MainPage = () => {
  const navigate = useNavigate();
  const works = useWorks();

  const onMore = React.useCallback(() => {
    navigate(Routing.ROUTE_INFORMATION, { replace: false });
  }, [navigate]);

  const onAllWorksView = React.useCallback(() => {
    navigate(Routing.ROUTE_WORK, { replace: false });
  }, [navigate]);

  return (
    <div className={styles.container}>
      <Landing onViewAllWorks={onAllWorksView} />
      <Intro onClick={onMore} />
      <section className={styles.advantages}>
        <h2>Почему нас выбирают?</h2>
        <AdvantagesList advantages={ADVANTAGES} />
      </section>
      <section className={styles.works}>
        <h2>Наши работы</h2>
        <WorkList works={works.slice(0, 3)} className={styles.workCards} />
        <ViewAllWorks title='Посмотреть все работы' className={styles.viewAllWorks} onClick={onAllWorksView} />
      </section>
    </div>
  );
};

export default MainPage;
