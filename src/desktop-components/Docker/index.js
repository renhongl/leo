import React from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';

export default function Docker({ data = [], toggleWin }) {
  return (
    <section className={styles.docker}>
      {data.map((item) => (
        <div className={styles.itemWrap}>
          {!item.mat ? (
            <div
              name={item.name}
              onClick={() => toggleWin(item.id)}
              key={item.id}
              className={styles.item}
              style={{
                backgroundImage: 'url(' + useBaseUrl('/img/' + item.icon) + ')',
              }}
            ></div>
          ) : (
            <div
              className={styles.item}
              name={item.name}
              key={item.id}
              onClick={() => toggleWin(item.id)}
            >
              <span class="material-symbols-outlined">{item.icon}</span>
            </div>
          )}
         
          {item.opened ? <span className={styles.opened}></span> : null}
        </div>
      ))}
    </section>
  );
}
