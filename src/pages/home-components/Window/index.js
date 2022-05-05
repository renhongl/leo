import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Time from '../Time';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

export default function Window() {
  const [size, setSize] = useState(['80%', '80%']);
  const [expanded, setExpand] = useState(false);
  const [drag, setDrag] = useState(false);
  const [prePos, setPrePos] = useState([0, 0]);
  const [currPos, setCurrPos] = useState(['50%', '50%']);

  useEffect(() => {
    // document.addEventListener('mouseup', mouseUp);
  }, []);

  function mouseMove(e) {
    if (drag) {
      const offsetX = e.screenX - prePos[0];
      const offsetY = e.screenY - prePos[1];
      console.log(offsetX, offsetY);
      setCurrPos([
        'calc(50% - ' + offsetX + 'px)',
        'calc(50% - ' + offsetY + 'px)',
      ]);
      setPrePos([e.screenX, e.screenY]);
      console.log(currPos);
    }
  }

  function mouseDown(e) {
    setDrag(true);
    setPrePos([e.screenX, e.screenY]);
  }

  function mouseUp() {
    setDrag(false);
  }

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
    <section
      className={styles.win}
      style={{
        width: size[0],
        height: size[1],
        left: currPos[0],
        top: currPos[1],
      }}
    >
      <div
        onMouseMove={(e) => mouseMove(e)}
        onMouseDown={(e) => mouseDown(e)}
        className={styles.winTit}
        onDoubleClick={() => onDoubleClick()}
      >
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
