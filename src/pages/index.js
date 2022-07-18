import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Card from '../components/Card';
import Category from '../components/Category';
import Navi from '../components/Navi';

const empty = {
  name: '暂未完成',
  logo: '/site/img/logo.svg',
  sub: '暂未完成',
  path: '',
};

const jsList = [
  {
    id: '1',
    name: '力扣算法题',
    logo: '/img/leetcode.svg',
    sub: '两数之和，三数之和，跳跃游戏等各种算法题讲解',
    path: '/docs/leetcode',
  },
  {
    id: '2',
    name: '排序',
    logo: '/site/img/logo.svg',
    sub: '冒泡排序，快速排序，选择排序，直接插入排序，归并排序，堆排序。。。',
    path: '/docs/sort',
  },
  {
    id: '3',
    name: '数据结构',
    logo: '/site/img/logo.svg',
    sub: '顺序表，链表，队列，栈，树，二叉树，堆，图',
    path: '/docs/data-structure',
  },
  {
    id: '4',
    name: '算法',
    logo: '/site/img/logo.svg',
    sub: '递归，回溯，贪心算法，动态规划，广度优先搜索，深度优先搜索',
    path: '/docs/algorithom',
  },
  {
    id: '5',
    name: '设计模式',
    logo: '/site/img/logo.svg',
    sub: '原型模式，单例模式，适配器模式，状态模式，观察者模式',
    path: '/docs/design-pattern',
  },
  {
    id: '6',
    name: '手写JS',
    logo: '/site/img/logo.svg',
    sub: '手写New，手写call，手写apply，手写Object.create，手写promise',
    path: '/docs/write-js',
  },
  {
    id: '7',
    name: 'HTTP',
    logo: '/site/img/logo.svg',
    sub: '暂未完成',
    path: '',
  },
];

const reactList = [
  {
    name: 'React',
    logo: '/site/img/logo.svg',
    sub: '暂未完成',
    path: '/docs/react',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <Navi></Navi>
      <main className={styles.main}>
        <Category title="Javascript">
          {jsList.map((item) => (
            <Link to={item.path} key={item.id}>
              <Card data={item}></Card>
            </Link>
          ))}
        </Category>
        <Category title="React">
          {reactList.map((item) => (
            <Link to={item.path} key={item.name}>
              <Card data={item}></Card>
            </Link>
          ))}
        </Category>
        <Category title="Angular">
          {[1, 2, 3, 4].map((item) => (
            <Link to={empty.path} key={item.id}>
              <Card data={empty}></Card>
            </Link>
          ))}
        </Category>
        <Category title="Gulp">
          {[1, 2, 3, 4].map((item) => (
            <Link to={empty.path} key={item.id}>
              <Card data={empty}></Card>
            </Link>
          ))}
        </Category>
        <Category title="Webpack">
          {[1, 2, 3, 4].map((item) => (
            <Link to={empty.path} key={item.id}>
              <Card data={empty}></Card>
            </Link>
          ))}
        </Category>
        <Category title="Vite">
          {[1, 2, 3, 4].map((item) => (
            <Link to={empty.path} key={item.id}>
              <Card data={empty}></Card>
            </Link>
          ))}
        </Category>
        <Category title="Nextjs">
          {[1, 2, 3, 4].map((item) => (
            <Link to={empty.path} key={item.id}>
              <Card data={empty}></Card>
            </Link>
          ))}
        </Category>
        <Category title="Nestjs">
          {[1, 2, 3, 4].map((item) => (
            <Link to={empty.path} key={item.id}>
              <Card data={empty}></Card>
            </Link>
          ))}
        </Category>
        <Category title="Redux">
          {[1, 2, 3, 4].map((item) => (
            <Link to={empty.path} key={item.id}>
              <Card data={empty}></Card>
            </Link>
          ))}
        </Category>
      </main>
    </Layout>
  );
}
