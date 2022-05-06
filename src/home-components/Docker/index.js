import React from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';

export default function Docker({ data = [], toggleWin }) {
  return (
    <section className={styles.docker}>
      {data.map((item) => (
        <div className={styles.itemWrap}>
          <div
            name={item.name}
            onClick={() => toggleWin(item.id)}
            key={item.id}
            className={styles.item}
            style={{
              backgroundImage: 'url(' + useBaseUrl('/img/' + item.icon) + ')',
            }}
          ></div>
          {item.opened ? <span className={styles.opened}></span> : null}
        </div>
      ))}
    </section>
  );
}
