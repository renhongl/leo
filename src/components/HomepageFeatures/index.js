import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Coding',
    Svg: require('@site/static/img/education-library-metting-svgrepo-com.svg')
      .default,
    description: <>一人，一桌，一电脑</>,
  },
  {
    title: 'Center',
    Svg: require('@site/static/img/mushrooms-autumn-nature-svgrepo-com.svg')
      .default,
    description: <>思想，方向，未来</>,
  },
  {
    title: 'Learning',
    Svg: require('@site/static/img/book-education-library-2-svgrepo-com.svg')
      .default,
    description: <>阅读，整理，记录，复习</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
