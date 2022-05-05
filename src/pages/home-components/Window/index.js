import React, { useState } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';

export default function Window() {
  const [size, setSize] = useState(['80%', '80%']);
  const [expanded, setExpand] = useState(false);
  function onDoubleClick() {
    if (expanded) {
      setSize(['80%', '80%']);
      setExpand(false);
    } else {
      setSize(['100%', '100%']);
      setExpand(true);
    }
  }

  return (
    <section className={styles.win} style={{ width: size[0], height: size[1] }}>
      <div className={styles.winTit} onDoubleClick={() => onDoubleClick()}>
        <span className={styles.red}></span>
        <span className={styles.yellow}></span>
        <span className={styles.gray}></span>
      </div>
      <div className={styles.winContent}>
        <iframe width="100%" height="100%" src="/leo" frameBorder="0"></iframe>
      </div>
    </section>
  );
}
