import React from 'react';

import { AccordionItem } from './accordion-item';
import styles from './accordtion.module.scss';

interface AccordionItem {
  id: string;
  title: string;
  srcIcon: string;
  content: string;
}

interface Props {
  className?: string;
  items: AccordionItem[];
}

export const Accordion: React.FC<Props> = ({ className, items }) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const handleToggle = React.useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <ul className={`${styles.accordion} ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          srcIcon={item.srcIcon}
          content={item.content}
          isOpen={activeId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
