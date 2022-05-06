import React, { useState } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../desktop-components/Header';
import Docker from '../../desktop-components/Docker';
import Window from '../../desktop-components/Window';
import Apps from '../../desktop-components/Apps';
import Settings from '../../desktop-components/Settings';

const defaultWins = [
  {
    id: 'win0',
    name: '所有应用',
    path: '/leo',
    icon: 'home',
    opened: false,
    active: false,
    mat: true,
  },
  {
    id: 'win10',
    name: '设置',
    path: '/leo',
    icon: 'settings',
    opened: false,
    active: false,
    mat: true,
    app: <Settings />,
  },
  {
    id: 'win1',
    name: '前端小站',
    path: '/leo',
    icon: 'language',
    opened: false,
    active: false,
    mat: true,
  },
  {
    id: 'win2',
    name: 'Markdown Editor',
    path: 'https://renhongl.github.io/markdown-editor/',
    icon: 'border_color',
    opened: false,
    active: false,
    mat: true,
  },
  {
    id: 'win3',
    name: 'Code Online',
    path: 'https://renhongl.github.io/code-online/#/',
    icon: 'code',
    opened: false,
    mat: true,
  },
  {
    id: 'win4',
    name: '隐藏任务栏',
    path: '/leo',
    icon: 'keyboard_hide',
    opened: false,
    redirct: true,
    mat: true,
  },
  {
    id: 'win5',
    name: '退出桌面模式',
    path: '/leo',
    icon: 'logout',
    opened: false,
    redirct: true,
    mat: true,
  },
];

export default function Home() {
  const [wins, setWins] = useState(defaultWins);
  const [showApps, setShowApps] = useState(false);
  const [showDocker, setShowDocker] = useState(true);

  function toggleWin(id) {
    if (id === 'win0') {
      return setShowApps(true);
    } else if (id === 'win4') {
      return setShowDocker(false);
    }
    setWins((wins) => {
      const newWins = [...wins];
      for (let item of newWins) {
        if (item.id === id) {
          if (item.redirct) {
            return (location = item.path);
          }
          item.opened = !item.opened;
          if (item.opened) {
            toggleActive(id);
          }
          break;
        }
      }
      return newWins;
    });
  }

  function toggleActive(id) {
    setWins((wins) => {
      const newWins = [...wins];
      for (let item of newWins) {
        if (item.id === id) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
      return newWins;
    });
  }

  return (
    <section
      style={{
        backgroundImage: 'url(' + useBaseUrl('/desktop/b2.svg') + ')',
      }}
      className={styles.home}
    >
      {showApps ? (
        <Apps data={wins} toggleWin={toggleWin} setShowApps={setShowApps} />
      ) : null}
      <Header></Header>
      <Docker
        data={wins}
        toggleWin={toggleWin}
        showDocker={showDocker}
        setShowDocker={setShowDocker}
      ></Docker>

      {wins
        .filter((win) => win.opened)
        .map((win) => (
          <Window
            key={win.id}
            data={win}
            toggleWin={toggleWin}
            toggleActive={toggleActive}
          ></Window>
        ))}
    </section>
  );
}
