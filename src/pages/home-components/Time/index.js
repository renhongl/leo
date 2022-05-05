import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function plusZero(n) {
  if (Number(n) < 10) {
    return '0' + n;
  }
  return n;
}

function getNow() {
  const now = new Date();
  return plusZero(now.getHours()) + ':' + plusZero(now.getMinutes());
}

export default function Time() {
  const [time, setTime] = useState(getNow());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getNow());
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);

  return <section className={styles.time}>{time}</section>;
}
