import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Category({ title, children }) {
  return (
    <div className={styles.category}>
      <div id={title} className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
