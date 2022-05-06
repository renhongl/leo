import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';

export default function Window({ data, toggleWin }) {
  const [zIndex, setZIndex] = useState(0);
  return (
    <Draggable
      axis="both"
      handle="#win"
      defaultPosition={{ x: 50, y: 50 }}
      position={null}
      scale={1}
      styles={{zIndex: }}
    >
      <ResizableBox
        width={800}
        height={600}
        minConstraints={[100, 100]}
        maxConstraints={[Infinity, Infinity]}
      >
        <section className={styles.win}>
          <div
            id="win"
            className={styles.winTit}
            onClick={() => setZIndex(zIndex + 10)}
          >
            <span
              onClick={() => toggleWin(data.id)}
              className={styles.red}
              style={{
                backgroundImage:
                  'url(' + useBaseUrl('/home/close-hover.svg') + ')',
              }}
            ></span>
            {/* <span
              className={styles.yellow}
              style={{
                backgroundImage:
                  'url(' + useBaseUrl('/home/close-hover.svg') + ')',
              }}
            ></span>
            <span
              className={styles.gray}
              style={{
                backgroundImage:
                  'url(' + useBaseUrl('/home/close-hover.svg') + ')',
              }}
            ></span> */}
            <span className={styles.winText}>{data.name}</span>
          </div>
          <div className={styles.winContent}>
            <iframe
              width="100%"
              height="100%"
              src={data.path}
              frameBorder="0"
            ></iframe>
          </div>
        </section>
      </ResizableBox>
    </Draggable>
  );
}
