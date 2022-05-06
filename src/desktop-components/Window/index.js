import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';

export default function Window({ data = {}, toggleWin, toggleActive }) {
  return (
    <div className={data.active ? styles.winWrap : ''}>
      <Draggable
        axis="both"
        handle="#win"
        defaultPosition={{ x: 400, y: 50 }}
        position={null}
        scale={1}
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
              onClick={() => toggleActive(data.id)}
            >
              <span
                onClick={() => toggleWin(data.id)}
                className={styles.red}
              ></span>
              <span className={styles.yellow}></span>
              <span className={styles.gray}></span>
              <span className={styles.winText}>{data.name}</span>
            </div>
            <div className={styles.winContent}>
              {data.app ? (
                data.app
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={data.path}
                  frameBorder="0"
                ></iframe>
              )}
            </div>
          </section>
        </ResizableBox>
      </Draggable>
    </div>
  );
}
