import React from 'react';
import styles from './styles.module.css';

export default function Resume() {
  return (
    <section className={styles.container}>
      <div className={styles.resume}>
        <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <span className={styles.title}>Leo Liang</span>
            <span className={styles.position}>Front-end Engineer</span>
          </div>
          <div className={styles.info}>
            <span>Male / 16-11-1991</span>
            <span>Github Link</span>
          </div>
          <div className={styles.info}>
            <span>Bachol Degree</span>
            <span>Github Link</span>
          </div>
          <div className={styles.info}>
            <span>Jiang Hun University</span>
            <span>Github Link</span>
          </div>
        </div>
        <div className={styles.main}>main</div>
        </div>
      </div>
    </section>
  );
}
