import React, { useState } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../desktop-components/Header';
import Docker from '../../desktop-components/Docker';
import Window from '../../desktop-components/Window';
import Apps from '../../desktop-components/Apps';
import Settings from '../../desktop-components/Settings';

export default function Home() {
  const [showApps, setShowApps] = useState(false);
  const [showDocker, setShowDocker] = useState(true);
  const [bgImg, setBg] = useState('b0.svg');

  const defaultWins = [
    {
      id: 'win0',
      name: '所有应用',
      path: '/site',
      icon: 'home',
      opened: false,
      active: false,
      mat: true,
      pin: true,
      start: true,
    },
    {
      id: 'win10',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: true,
      start: true,
    },
    {
      id: 'win1',
      name: '前端小站',
      path: '/site',
      icon: 'language',
      opened: false,
      active: false,
      mat: true,
      pin: true,
      start: false,
    },
    {
      id: 'win2',
      name: 'Markdown Editor',
      path: 'https://renhongl.github.io/markdown-editor/',
      icon: 'border_color',
      opened: false,
      active: false,
      mat: true,
      pin: true,
      start: false,
    },
    {
      id: 'win3',
      name: 'Code Online',
      path: 'https://renhongl.github.io/code-online/#/',
      icon: 'code',
      opened: false,
      mat: true,
      pin: true,
      start: false,
    },
    {
      id: 'win4',
      name: '隐藏任务栏',
      path: '/site',
      icon: 'keyboard_hide',
      opened: false,
      redirct: true,
      mat: true,
      pin: true,
      start: false,
    },
    {
      id: 'win5',
      name: '退出桌面模式',
      path: '/site',
      icon: 'logout',
      opened: false,
      redirct: true,
      mat: true,
      pin: true,
      start: false,
    },
    {
      id: 'win52',
      name: 'aaa',
      path: '/site',
      icon: 'logout',
      opened: false,
      redirct: true,
      mat: true,
      pin: false,
      start: true,
    },
    {
      id: 'win51',
      name: 'bbb',
      path: '/site',
      icon: 'logout',
      opened: false,
      redirct: true,
      mat: true,
      pin: false,
      start: true,
    },
    {
      id: 'win101',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'win102',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'win103',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'win103hjghffd',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'ghfghdfg',
      name: '设置dfasdfasd',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'win1ghfgdh03fd',
      name: '设置dfsfada',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'hfdghdfg',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'win1ghfgd03fd',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'winhsfg103fd',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'gdgfds',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'dfasddfd',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
    {
      id: 'win103fddfasd',
      name: '设置',
      path: '/site',
      icon: 'settings',
      opened: false,
      active: false,
      mat: true,
      app: <Settings setBg={setBg} addWin={addWin} />,
      pin: false,
      start: true,
    },
  ];

  const [wins, setWins] = useState(defaultWins);

  function addWin(win) {
    console.log(win);
    setWins((wins) => {
      return [...wins, win];
    });
  }

  function toggleWin(id) {
    if (id === 'win0') {
      return setShowApps(true);
    } else if (id === 'win4') {
      return setShowDocker(false);
    }
    const win = wins.find((item) => item.id === id);
    if (win.temp && win.opened) {
      return setWins((wins) => wins.filter((item) => item.id !== id));
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
        backgroundImage: 'url(' + useBaseUrl('/desktop/' + bgImg) + ')',
      }}
      className={styles.home}
    >
      {showApps ? (
        <Apps data={wins.filter(item => item.start)} toggleWin={toggleWin} setShowApps={setShowApps} />
      ) : null}
      <Header></Header>
      <Docker
        data={wins.filter(item => item.pin)}
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
