import React from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';

export default function Docker({
  data = [],
  toggleWin,
  showDocker,
  setShowDocker,
}) {
  return (
    <section
      className={showDocker ? styles.docker : styles.smallDocker}
      onClick={() => !showDocker && setShowDocker(true)}
    >
      {data.map((item) => (
        <div className={styles.itemWrap} key={item.id}>
          {!item.mat ? (
            <div
              name={item.name}
              onClick={() => toggleWin(item.id)}
              className={styles.item}
              style={{
                backgroundImage: 'url(' + useBaseUrl('/img/' + item.icon) + ')',
              }}
            ></div>
          ) : (
            <div
              className={styles.item}
              name={item.name}
              onClick={() => toggleWin(item.id)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
          )}

          {item.opened ? <span className={styles.opened}></span> : null}
        </div>
      ))}
    </section>
  );
}
