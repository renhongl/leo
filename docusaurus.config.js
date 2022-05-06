// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '前端小站',
  tagline: '欢迎访问我的网站',
  url: 'https://renhongl.github.io',
  baseUrl: '/leo/',

  //baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'renhongl', // Usually your GitHub org/user name.
  projectName: 'leo', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'leo, renhongl' }],
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [{ to: '/desktop', label: '桌面模式', position: 'right' }],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '站点内容',
            items: [
              {
                label: '主页',
                to: '/',
              },
              {
                label: '博客',
                to: '/blog',
              },
              { to: '/about', label: '关于作者', position: 'right' },
            ],
          },
          {
            title: '其他作品',
            items: [
              {
                label: 'Markdown编辑器',
                href: 'https://renhongl.github.io/markdown-editor/',
              },
              {
                label: 'Javascript编辑器',
                href: 'https://renhongl.github.io/code-online#/',
              },
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: '作者博客',
                href: 'https://renhongl.github.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/renhongl',
              },
              {
                label: '简历',
                href: 'https://renhongl.github.io/leo/resume',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Leo.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
