import React from 'react';
import styles from './desktop.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from './home-components/Header';
import Docker from './home-components/Docker';
import Window from './home-components/Window';

export default function Home() {
  return (
    <section
      style={{
        backgroundImage: 'url(' + useBaseUrl('/home/home-bg.jpg') + ')',
      }}
      className={styles.home}
    >
      <Header></Header>
      <Docker></Docker>
      <Window></Window>
    </section>
  );
}
