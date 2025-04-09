import React from 'react';
import { Link } from 'react-router';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  links: Array<{ title: string; path?: string }>;
}

export const Breadcrumbs: React.FC<Props> = ({ className, links }) => {
  return (
    <nav className={`${styles.breadcrumbs} ${className}`} aria-label="Breadcrumbs">
      {links.map((link) => (
        <>
          {link.path && <Link to={link.path}>{link.title}</Link>}
          {!link.path && <span className={styles.currentPage} aria-current="page">{link.title}</span>}
        </>
      ))}
    </nav>
  );
};
