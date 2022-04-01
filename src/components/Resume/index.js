import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Card({ title, children }) {
  return (
    <div className={styles.cardComp}>
      <div className={styles.cardTitle}>
        <span className={styles.cardLine}></span>
        <span className={styles.cardTitleText}>{title}</span>
        <span className={styles.cardLine}></span>
      </div>
      <div>{children}</div>
    </div>
  );
}

function Row({ text }) {
  return (
    <div className={styles.rowRow}>
      <span className={styles.rowDot}></span>
      {text}
    </div>
  );
}

function Title({ text, date }) {
  return (
    <div className={styles.titleTitle}>
      <span className={styles.titleText}>{text}</span>
      <span className={styles.titleDate}>{date}</span>
    </div>
  );
}

export default function Resume() {
  return (
    <section className={styles.container}>
      <div className={styles.resume}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <span className={styles.title}>Leo Liang</span>
              <span className={styles.subTitile}>梁仁洪</span>
              <span className={styles.position}>Front-end Engineer</span>
            </div>
            <div className={styles.info}>
              <span>Male / 16-11-1991</span>
              <span className={styles.infoLink}>
                <span>liangrenhong2017@gmail.com</span>&nbsp;
                <img
                  width="20px"
                  height="20px"
                  src={useBaseUrl('/img/email-svgrepo-com.svg')}
                />
              </span>
            </div>
            <div className={styles.info}>
              <span>本科 / 2015年毕业</span>
              <span className={styles.infoLink}>
                <span>GitHub</span>&nbsp;
                <img
                  width="20px"
                  height="20px"
                  src={useBaseUrl('/img/github-octocat-svgrepo-com.svg')}
                />
              </span>
            </div>
            <div className={styles.info}>
              <span>Jiang Hun University 电子信息工程</span>
              <span className={styles.infoLink}>
                <span>Website</span>&nbsp;
                <img
                  width="20px"
                  height="20px"
                  src={useBaseUrl('/img/website-svgrepo-com.svg')}
                />
              </span>
            </div>
            <div className={styles.info}>
              <span>高级前端开发 / 7年工作经验</span>
              <span className={styles.infoLink}>
                <span>88696630</span>&nbsp;
                <img
                  width="20px"
                  height="20px"
                  src={useBaseUrl('/img/phone-svgrepo-com.svg')}
                />
              </span>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.column}>
              <Card title="专业技能">
                <Row text="熟练使用HTML,CSS,Javascript等前端基础"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端框架熟练使用HTML,CSS,Javascript等前端框架熟练使用HTML,CSS,Javascript等前端框架"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库"></Row>
              </Card>
              <Card title="项目简介">
                <Row text="熟练使用HTML,CSS,Javascript等前端基础"></Row>
              </Card>
              <Card title="开源项目">
                <Title text="智慧城市" date="03.13.2021~至今"></Title>
                <Row text="熟练使用HTML,CSS,Javascript等前端基础"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端框架熟练使用HTML,CSS,Javascript等前端框架熟练使用HTML,CSS,Javascript等前端框架"></Row>
                <Title text="机器人" date="03.13.2021~至今"></Title>
                <Row text="熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库"></Row>
                <Title text="物联网" date="03.13.2021~至今"></Title>
                <Row text="熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库"></Row>
              </Card>
            </div>
            <div className={styles.column}>
              <Card title="项目简介">
                <Row text="熟练使用HTML,CSS,Javascript等前端基础"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端基础"></Row>
              </Card>
              <Card title="项目简介">
                <Title text="奇怪的项目"></Title>
                <Row text="熟练使用HTML,CSS,Javascript等前端基础"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端框架熟练使用HTML,CSS,Javascript等前端框架熟练使用HTML,CSS,Javascript等前端框架"></Row>
                <Title text="奇怪的项目"></Title>
                <Row text="熟练使用HTML,CSS,Javascript等前端库HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTM库熟练使用HTML,CSS,Javascript等前端库"></Row>
                <Title text="奇怪的项目"></Title>
                <Row text="熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库"></Row>
              </Card>
              <Card title="专业技能">
                <Row text="熟练使用HTML,CSS,Javascript等前端基础"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端框架熟练使用HTML,CSS,Javascript等前端框架熟练使用HTML,CSS,Javascript等前端框架"></Row>
                <Row text="熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库熟练使用HTML,CSS,Javascript等前端库"></Row>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
