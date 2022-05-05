import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

export default function Window() {
  const [size, setSize] = useState(['80%', '80%']);
  const [expanded, setExpand] = useState(false);

  useEffect(() => {
    // document.addEventListener('mouseup', mouseUp);
  }, []);

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
    <Draggable
      axis="x"
      handle=".winTit"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      <section
        className={styles.win}
        style={{
          width: size[0],
          height: size[1],
        }}
      >
        <div
          handle=".handle"
          className={styles.winTit}
          onDoubleClick={() => onDoubleClick()}
        >
          <span className={styles.red}></span>
          <span className={styles.yellow}></span>
          <span className={styles.gray}></span>
        </div>
        <div className={styles.winContent}>
          <iframe
            width="100%"
            height="100%"
            src="/leo"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </Draggable>
  );
}
