import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Card from '@site/src/components/Card';

const data = [
  {
    name: '力扣算法题',
    logo: '',
    sub: '数组，二分查找，链表',
  },
  {
    name: '排序',
    logo: '',
    sub: '数组，二分查找，链表',
  },
  {
    name: '数据结构',
    logo: '',
    sub: '数组，二分查找，链表',
  },
  {
    name: '算法',
    logo: '',
    sub: '数组，二分查找，链表',
  },
  {
    name: '设计模式',
    logo: '',
    sub: '数组，二分查找，链表',
  },
  {
    name: '面试题',
    logo: '',
    sub: '数组，二分查找，链表',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.main}>
        {data.map((item) => (
          <Card data={item}></Card>
        ))}
      </main>
    </Layout>
  );
}
