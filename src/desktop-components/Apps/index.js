import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import App from '../App';

export default function Apps({ data, toggleWin, setShowApps }) {
  return (
    <section className={styles.apps}>
      {data.map((item) => (
        <App data={item} toggleWin={toggleWin} setShowApps={setShowApps}></App>
      ))}
    </section>
  );
}
