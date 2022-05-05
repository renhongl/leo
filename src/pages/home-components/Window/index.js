import React from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';

export default function Window() {
  return (
    <section className={styles.window}>
      <div className={styles.title}>Browser</div>
      <div className={styles.content}>
        <iframe width="100%" height="100%" src="/leo" frameBorder="0"></iframe>
      </div>
    </section>
  );
}
