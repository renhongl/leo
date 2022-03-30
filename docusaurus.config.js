// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Leo',
  tagline: '欢迎访问我的网站',
  url: 'https://renhongl.github.io',
  //baseUrl: '/pomelo/',

  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'renhongl', // Usually your GitHub org/user name.
  projectName: 'pomelo', // Usually your repo name.

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'leo, renhongl' }],
      navbar: {
        title: 'Leo',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo2.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          { to: '/about', label: '关于', position: 'left' },
          {
            href: 'https://github.com/renhongl',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '简介',
                to: '/docs/intro',
              },
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
                label: '旧博客地址',
                href: 'https://renhongl.github.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/renhongl',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pomelo.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
