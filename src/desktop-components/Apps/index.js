import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import App from '../App';

export default function Apps({ data, toggleWin, setShowApps }) {
  return (
    <section className={styles.apps}>
      <div className={styles.appsRow}>
        <p className={styles.appsTitle}>高效工作</p>
        <div className={styles.center}>
          {data.map((item) => (
            <App data={item} toggleWin={toggleWin} setShowApps={setShowApps}></App>
          ))}
        </div>
      </div>
      <div className={styles.appsRowSec}>
        <p className={styles.appsTitle}>娱乐生活</p>
        <div className={styles.center}>
          {data.map((item) => (
            <App data={item} toggleWin={toggleWin} setShowApps={setShowApps}></App>
          ))}
        </div>
      </div>
      <div className={styles.appsRowThir}>
        <p className={styles.appsTitle}>影音读书</p>
        <div className={styles.center}>
          {data.map((item) => (
            <App data={item} toggleWin={toggleWin} setShowApps={setShowApps}></App>
          ))}
        </div>
      </div>
    </section>
  );
}
