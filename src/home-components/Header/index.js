import React from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';

export default function Header() {
  return (
    <section className={styles.header}>
      <Time></Time>
    </section>
  );
}
