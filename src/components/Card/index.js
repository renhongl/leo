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
          src={useBaseUrl('/img/website-svgrepo-com.svg')}
        />
        <span className={styles.subTitle}>
          在图论中，树（英语：Tree）是一种无向图（undirected
          graph），其中任意两个顶点间存在唯一一条路径。或者说，只要没有回路的连通图就是树。森林是指互相不交并树的集合。
        </span>
      </div>
    </div>
  );
}
