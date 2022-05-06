import React, { useState } from 'react';
import styles from './desktop.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from './home-components/Header';
import Docker from './home-components/Docker';
import Window from './home-components/Window';

const defaultWins = [
  {
    id: 'win1',
    name: '前端小站',
    path: '/leo',
    icon: 'leetcode.svg',
    opened: false,
  },
  {
    id: 'win2',
    name: 'Markdown Editor',
    path: 'https://renhongl.github.io/markdown-editor/',
    icon: 'graph.png',
    opened: false,
  },
  {
    id: 'win3',
    name: 'Code Online',
    path: 'https://renhongl.github.io/code-online/#/',
    icon: 'js.png',
    opened: false,
  },
];

export default function Home() {
  const [wins, setWins] = useState(defaultWins);

  function toggleWin(id) {
    setWins((wins) => {
      const newWins = [...wins];
      for (let item of newWins) {
        if (item.id === id) {
          item.opened = !item.opened;
          break;
        }
      }
      return newWins;
    });
  }

  return (
    <section
      style={{
        backgroundImage: 'url(' + useBaseUrl('/home/home-bg.jpg') + ')',
      }}
      className={styles.home}
    >
      <Header></Header>
      <Docker data={wins} toggleWin={toggleWin}></Docker>
      {wins
        .filter((win) => win.opened)
        .map((win) => (
          <Window key={win.id} data={win} toggleWin={toggleWin}></Window>
        ))}
    </section>
  );
}
