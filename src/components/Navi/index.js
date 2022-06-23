import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Category({ children }) {
  return (
    <div className={styles.navi}>
      <div className={styles.content}>
        <a>
          <p>分类</p>
        </a>
        <a href="#Javascript">
          <div className={styles.item}>Javascript</div>
        </a>
        <a href="#React">
          <div className={styles.item}>React</div>
        </a>
        <a href="#Angular">
          <div className={styles.item}>Angular</div>
        </a>
        <a href="#Gulp">
          <div className={styles.item}>Gulp</div>
        </a>
        <a href="#Webpack">
          <div className={styles.item}>Webpack</div>
        </a>
        <a href="#Vite">
          <div className={styles.item}>Vite</div>
        </a>
        <a href="#Nextjs">
          <div className={styles.item}>Nextjs</div>
        </a>
        <a href="#Nestjs">
          <div className={styles.item}>Nestjs</div>
        </a>
        <a href="#Redux">
          <div className={styles.item}>Redux</div>
        </a>
      </div>
    </div>
  );
}
