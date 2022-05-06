import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';
import React, { useState } from 'react';
import styles from './index.module.css';

const data = [
  {
    path: 'b0.svg',
  },
  {
    path: 'b1.svg',
  },
  {
    path: 'b2.svg',
  },
  {
    path: 'b3.svg',
  },
  {
    path: 'b4.svg',
  },
  {
    path: 'b5.svg',
  },
];

export default function Theme({ setBg }) {
  return (
    <section className={styles.theme}>
      {data.map((item) => (
        <img
          className={styles.img}
          src={useBaseUrl('/desktop/' + item.path)}
          onClick={() => setBg(item.path)}
        />
      ))}
    </section>
  );
}
