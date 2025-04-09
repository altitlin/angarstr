import React from 'react';

import angar1Photo from 'app/assets/images/old-baturino-1.webp';
import angar2Photo from 'app/assets/images/old-baturino-2.webp';
import angar3Photo from 'app/assets/images/kulikovo-1.webp';

import { Button } from 'shared/ui/button';

import styles from './styles.module.scss';

interface Props {
  onClick: () => void;
}

export const Intro: React.FC<Props> = ({ onClick }) => {
  return (
    <section id="intro" className={styles.intro}>
      <article className={styles.item}>
        <div className={styles.content}>
          <h2>Что такое бескаркасный ангар?</h2>
          <p>
            Это самонесущая конструкция, имеющая арочную форму. Ширина арки может достигать 25 м при абсолютно любой длине. Перед тем, как приступать к производству ангаров, разрабатывается проект. Фундамент выбирается индивидуально, в зависимости от того, на какой грунт устанавливается конструкция. Но, учитывая относительно легкий вес строения, это фундаменты поверхностного заложения: ленточный или столбчатый.
          </p>
        </div>
        <figure>
          <img alt="Первый ангар" src={angar1Photo} loading='lazy' />
        </figure>
      </article>
      <article className={styles.item}>
        <figure>
          <img alt="Второй ангар" src={angar2Photo} loading='lazy' />
        </figure>
        <div className={styles.content}>
          <h2>Цена бескаркасного ангара</h2>
          <p>
            Расчет стоимости каждого ангара индивидуален. Он учитывает длину ангара, ширину арки, толщину стали и многие другие моменты. Но даже при прочих равных мы готовы предложить вам выбор. Например, вариант строительства “под ключ” – мы выполним все работы, а вам останется только “повернуть ключ” и начать использовать ангар по его прямому назначению.
          </p>
        </div>
      </article>
      <article className={styles.item}>
        <div className={styles.content}>
          <h2>Преимущества бескаркасных ангаров</h2>
          <p>
            Основным преимуществом таких конструкций является дешевизна, по сравнению с бетонными, кирпичными или деревянными аналогами.
          </p>
        </div>
        <figure>
          <img alt="Третий ангар" src={angar3Photo} loading='lazy' />
        </figure>
      </article>
      <Button
        isRoundedFull
        size='large'
        color='yellow'
        className={styles.learnMoreButton}
        onClick={onClick}
      >
        Узнать подробнее
      </Button>
    </section>
  );
};
