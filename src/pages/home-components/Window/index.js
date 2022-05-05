import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';

export default function Window() {
  return (
    <Draggable
      axis="both"
      handle="#win"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      scale={1}
    >
      <ResizableBox
        width={400}
        height={400}
        minConstraints={[100, 100]}
        maxConstraints={[Infinity, Infinity]}
      >
        <section className={styles.win}>
          <div id="win" className={styles.winTit}>
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
      </ResizableBox>
    </Draggable>
  );
}
