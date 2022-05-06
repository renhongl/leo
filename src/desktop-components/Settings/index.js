import React, { useState } from 'react';
import styles from './index.module.css';
import Theme from '../Theme';

export default function Settings({ setBg }) {
  const [curr, setCurr] = useState();
  const settings = [
    {
      id: 'win0',
      name: '主题',
      path: '/leo',
      icon: 'dark_mode',
      opened: false,
      active: false,
      mat: true,
      app: <Theme setBg={setBg} />,
    },
    {
      id: 'win1',
      name: '任务栏',
      path: '/leo',
      icon: 'grid_view',
      opened: false,
      active: false,
      mat: true,
    },
    {
      id: 'win2',
      name: '通用',
      path: '/leo',
      icon: 'settings_suggest',
      opened: false,
      active: false,
      mat: true,
    },
    {
      id: 'win3',
      name: '语言',
      path: '/leo',
      icon: 'language',
      opened: false,
      active: false,
      mat: true,
    },
  ];
  return (
    <section className={styles.settingsCon}>
      {!curr
        ? settings.map((item) => (
            <div
              className={styles.settingsWrap}
              key={item.id}
              onClick={() => setCurr(item)}
            >
              <div className={styles.settings}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <span className={styles.name}>{item.name}</span>
            </div>
          ))
        : curr.app}
    </section>
  );
}
