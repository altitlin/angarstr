import React from 'react';
import { useParams } from 'react-router';

import { useWorks } from 'entries/work';
import { PARAMETER_WORK_ID, ROUTE_WORKS } from 'shared/constants/routing';
import { Breadcrumbs } from 'shared/ui/breadcrumbs';

import styles from './styles.module.scss';

const WorkPage = () => {
  const { [PARAMETER_WORK_ID]: workId } = useParams();

  const works = useWorks();

  const work = React.useMemo(
    () => works.find((work) => work.id === workId),
    [works, workId],
  );

  const links = React.useMemo(
    () => ([
      { title: 'Наши работы', path: ROUTE_WORKS },
      { title: work?.title ?? '' },
    ]),
    [work],
  );

  if (!work) {
    return (
      <div>Работа не найдена</div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Breadcrumbs className={styles.workBreadcrumbs} links={links} />
        <article>
          <header>
            <h1>{work.title}</h1>
            <figure>
              <img alt="Картинка ангара" src={work.images[0]} />
            </figure>
          </header>
          <section>
            {work.images.slice(1).map((image) => (
              <figure key={image}>
                <img alt="Картинка ангара" src={image} />
              </figure>
            ))}
          </section>
        </article>
      </div>
    </div>
  );
};

export default WorkPage;
