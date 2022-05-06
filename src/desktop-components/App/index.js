import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function App({ data, toggleWin, setShowApps }) {
  return (
    <section className={styles.appWrap}>
      {!data.mat ? (
        <div
          name={data.name}
          onClick={() => {
            toggleWin(data.id);
            setShowApps(false);
          }}
          key={data.id}
          className={styles.app}
          style={{
            backgroundImage: 'url(' + useBaseUrl('/img/' + data.icon) + ')',
          }}
        ></div>
      ) : (
        <div
          className={styles.app}
          name={data.name}
          key={data.id}
          onClick={() => {
            toggleWin(data.id);
            setShowApps(false);
          }}
        >
          <span className="material-symbols-outlined">{data.icon}</span>
        </div>
      )}
      <span className={styles.name}>{data.name}</span>
    </section>
  );
}
