import React from 'react';

import styles from './accordtion.module.scss';

interface Props {
  id: string;
  title: string;
  content: string;
  srcIcon: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export const AccordionItem: React.FC<Props> = ({
  id,
  title,
  content,
  srcIcon,
  isOpen,
  onToggle,
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState('0px');

  React.useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <li key={id} className={`${styles.item} ${isOpen ? styles.active : ''}`}>
      <div
        role='button'
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
        id={`header-${id}`}
        onClick={() => onToggle(id)}
        className={styles.header}
      >
        <span className={styles.title}>
          <img alt="Иконка рубрики" src={srcIcon} />
          {title}
        </span>
        <span className={styles.icon} />
      </div>
      <div
        id={`content-${id}`}
        role='region'
        aria-labelledby={`header-${id}`}
        className={styles.collapsible}
        style={{ maxHeight: height }}
      >
        <div ref={contentRef} className={styles.content}>
          <p>{content}</p>
        </div>
      </div>
      <div className={styles.bg} />
    </li>
  );
};
