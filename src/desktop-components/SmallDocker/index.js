import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SmallDocker({ setShowDocker }) {
  return (
    <section
      className={styles.smallDocker}
      onClick={() => setShowDocker(true)}
    ></section>
  );
}
