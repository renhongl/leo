import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>【{data.name}】</div>
      <div className={styles.sub}>
        <img
          // onClick={onLink}
          className={styles.rowLink}
          width="40px"
          height="40px"
          src={useBaseUrl(data.logo || '/img/website-svgrepo-com.svg')}
        />
        <span className={styles.subTitle}>{data.sub}</span>
      </div>
    </div>
  );
}
