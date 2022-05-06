import React, { useState } from 'react';
import styles from './index.module.css';
import Theme from '../Theme';

export default function Settings({ setBg, addWin }) {
  const settings = [
    {
      id: 'win0000',
      name: '主题',
      path: '/site',
      icon: 'dark_mode',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win1111',
      name: '任务栏',
      path: '/site',
      icon: 'grid_view',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win2222',
      name: '通用',
      path: '/site',
      icon: 'settings_suggest',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win3333',
      name: '语言',
      path: '/site',
      icon: 'language',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win0000423',
      name: '主题',
      path: '/site',
      icon: 'dark_mode',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win1111534',
      name: '任务栏',
      path: '/site',
      icon: 'grid_view',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win22224534',
      name: '通用',
      path: '/site',
      icon: 'settings_suggest',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win333345dfasdf34',
      name: '语言',
      path: '/site',
      icon: 'language',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win111153dfasdf4',
      name: '任务栏',
      path: '/site',
      icon: 'grid_view',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win2222453fasdfad4',
      name: '通用',
      path: '/site',
      icon: 'settings_suggest',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'fdsdfadsf',
      name: '语言',
      path: '/site',
      icon: 'language',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
  ];
  return (
    <section className={styles.settingsCon}>
      {settings.map((item) => (
        <div
          className={styles.settingsWrap}
          key={item.id}
          onClick={(e) =>
            {
              addWin({
                ...item,
                id: Math.random(),
                opened: true,
                active: true,
                temp: true,
              });
              console.log(e)
              e.preventDefault();
              e.stopPropagation();
            }
          }
        >
          <div className={styles.settings}>
            <span className="material-symbols-outlined">{item.icon}</span>
          </div>
          <span className={styles.name}>{item.name}</span>
        </div>
      ))}
    </section>
  );
}
