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

function Row({ text, link }) {
  // const onLink = () => {
  //   window.open(link, '_blank');
  // };

  return (
    <div className={styles.rowRow}>
      <span className={styles.rowDot}></span>
      {text}
      {link && (
        <a
          href={link}
          target="_blank"
          style={{ position: 'absolute', right: 0 }}
        >
          <img
            // onClick={onLink}
            className={styles.rowLink}
            width="20px"
            height="20px"
            src={useBaseUrl('/img/link-svgrepo-com.svg')}
          />
        </a>
      )}
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
      <div className={styles.download}>
        <span
          className="material-icons"
          style={{
            boxShadow: '0 0 10px rgb(0 0 0 / 50%)',
            fontSize: '50px',
            color: '#0095ff',
            borderRadius: '50%',
          }}
        >
          download_for_offline
        </span>
      </div>
      <div className={styles.resume}>
        <div className={styles.content} id="resume">
          <div className={styles.top}>
            <div className={styles.header}>
              <span className={styles.title}>Liang Ren Hong</span>
              <span className={styles.subTitile}>梁仁洪</span>
              <span className={styles.position}>Senior Front-end Engineer</span>
              <img
                className={styles.avator}
                width="20px"
                height="20px"
                src="https://avatars.githubusercontent.com/u/16144833?s=400&u=6bca67b08ec005077c82afcb1f011b8746d9970b&v=4"
              />
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
              <span>Bachelor / Graduated in 2015</span>
              <span className={styles.infoLink}>
                <span>GitHub</span>&nbsp;
                <a
                  href="https://github.com/renhongl"
                  target="_blank"
                  style={{ display: 'flex' }}
                >
                  <img
                    width="20px"
                    height="20px"
                    src={useBaseUrl('/img/github-octocat-svgrepo-com.svg')}
                  />
                </a>
              </span>
            </div>
            <div className={styles.info}>
              <span>Jianghan University / Electronic Information</span>
              <span className={styles.infoLink}>
                <span>Website</span>&nbsp;
                <a
                  href="https://renhongl.github.io/site/"
                  target="_blank"
                  style={{ display: 'flex' }}
                >
                  <img
                    width="20px"
                    height="20px"
                    src={useBaseUrl('/img/website-svgrepo-com.svg')}
                  />
                </a>
              </span>
            </div>
            <div className={styles.info}>
              <span>7 years experience on frond-end development</span>
              <span className={styles.infoLink}>
                <span>(+65) 8869 8830</span>&nbsp;
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
              <Card title="Professional Skills">
                <Row text="HTML, CSS & Javascript"></Row>
                <Row text="Angular,  Typescript & Rxjs"></Row>
                <Row text="React, Redux & Axios"></Row>
                <Row text="Nodejs, Gulpjs"></Row>
                <Row text="Nestjs, Restful API"></Row>
              </Card>
              <Card title="Work Experience">
                <Title text="TOAI (Front-end Lead)" date="2020.4~Now"></Title>
                <Row text="Designed front-end architecture for the whole product."></Row>
                <Row text="Developed scripts to automatically generate code templates."></Row>
                <Row text="Created independent complex functions using angular application, to enable flexible combination of project functions."></Row>
                <Row text="Developed extensible and pluggable modules for external use to support other projects."></Row>

                <Title
                  text="Interllisurf (Front-end Lead)"
                  date="2018.7~2020.4"
                ></Title>
                <Row text="Developed core modules for the product."></Row>
                <Row text="Troubleshooted and solved all front-end issues."></Row>
                <Row text="Led the front-end team to deliver tasks on time in 3 month."></Row>
                <Row text="Successfully completed complex page functions within the planned timeline, received excellent comments from the product team."></Row>

                <Title
                  text="Interllisurf (Front-end Lead)"
                  date="2015.7~2018.7"
                ></Title>
                <Row text="Developed customer designed functions."></Row>
                <Row text="Troubleshooted and solved front-end issues for the whole project."></Row>
                <Row text="Successfully delivers tasks on time with 4 other developers."></Row>
              </Card>
            </div>
            <div className={styles.column}>
              <Card title="Work Projects">
                <Title text="IOT Plantform" date="2020.4~Now"></Title>
                <Row text="Designed front-end architecture for the whole product."></Row>
                <Row text="Developed scripts to automatically generate code templates."></Row>
                <Title text="Smart City" date="2020.4~Now"></Title>
                <Row text="Designed front-end architecture for the whole product."></Row>
                <Row text="Developed scripts to automatically generate code templates."></Row>
                <Title text="Big Data" date="2020.4~Now"></Title>
                <Row text="Designed front-end architecture for the whole product."></Row>
                <Row text="Developed scripts to automatically generate code templates."></Row>
              </Card>
              <Card title="Personal Projects">
                <Row
                  text="Online markdown editor"
                  link="https://renhongl.github.io/markdown-editor/"
                ></Row>
                <Row
                  text="Online javascript editor"
                  link="https://renhongl.github.io/code-online#/"
                ></Row>
                <Row
                  text="Web chat room"
                  link="https://renhongl.github.io/2016/11/24/%E5%BA%94%E7%94%A8%E5%B9%B3%E5%8F%B0WEB/"
                ></Row>
                <Row
                  text="Music player for desktop"
                  link="https://renhongl.github.io/2017/01/21/%E7%88%B1%E5%90%AC%E6%92%AD%E6%94%BE%E5%99%A8/"
                ></Row>
              </Card>
              <Card title="Hobby">
                <Row text="Programming"></Row>
                <Row text="Learning new technology skills"></Row>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
