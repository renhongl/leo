import React from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.left}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '16px' }}
        >
          cloudbuild
        </span>
        <span className={styles.item}>搜索</span>
        <span className={styles.item}>浏览器</span>
      </div>
      <div className={styles.left}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '16px', paddingRight: '10px', cursor: 'pointer' }}
        >
          search
        </span>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: '16px', paddingRight: '10px', cursor: 'pointer' }}
        >
          person
        </span>
        <Time className={styles.item}></Time>
      </div>
    </section>
  );
}
