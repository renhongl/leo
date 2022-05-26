import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Category({ children }) {
  return (
    <div className={styles.navi}>
      <div className={styles.content}>
        <a>
          <p>分类</p>
        </a>
        <a href="#Javascript">
          <div className={styles.item}>Javascript</div>
        </a>
        <a href="#React">
          <div className={styles.item}>React</div>
        </a>
      </div>
    </div>
  );
}
