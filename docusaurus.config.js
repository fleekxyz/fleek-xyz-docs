// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const commonDocsOptions = {
  breadcrumbs: false,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  editUrl:
    'https://github.com/fleek-xyz/',
};

const commonNavbarItems = [{
  to: 'docs',
  label: 'Documentation',
  position: 'left',
},
{
  to: 'guides',
  label: 'Guides',
  position: 'left',
  activeBasePath: 'guides',
},
{
  to: 'templates',
  label: 'Templates',
  position: 'left',
  activeBasePath: 'templates',
},
{
  to: 'changelog',
  label: 'Changelog',
  position: 'left',
  activeBasePath: 'changelog',
},
{
  href: 'https://github.com/fleekxyz',
  label: 'Github',
  position: 'left',
  target: '_blank',
}];

const commonDiscord = 'https://discord.gg/fleekxyz';
const commonTwitter = 'https://twitter.com/fleekxyz';
const commonHome = 'https://fleek.xyz';
const commonCompanyUrl = 'https://fleek.xyz';
const commonSupport = 'https://support.fleek.xyz';

const copyright = `Copyright © ${new Date().getFullYear()} Fleek`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fleek Docs | Build Lightning Fast Web3 Apps',
  tagline: 'Welcome to the docs of Fleek. Seamlessly build Web3 apps and services that are edge-optimized for performance.',
  url: 'https://docs.fleek.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico?202301091316',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fleekxyz', // Usually your GitHub org/user name.
  projectName: 'fleek-xyz-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: true,
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'GTM-PC422SF',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/documentation.png',
      metadata:[{
        description: 'Welcome to the docs of Fleek. Seamlessly build Web3 apps and services that are edge-optimized for performance.'}],      
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      navbar: {
        logo: {
          alt: 'Fleek',
          src: 'img/logo.png?2023091241',
        },
        items: [
          ...commonNavbarItems,
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Resources',
            items: [
              ...commonNavbarItems,
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: commonDiscord,
              },
              {
                label: 'Twitter',
                href: commonTwitter,
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Home',
                href: commonCompanyUrl,
              },
              {
                label: 'Contact us',
                href: commonSupport,
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Fleek. All rights reserved.`,
        logo: {
          alt: 'Fleek',
          src: 'img/logo+named.svg?202301101154',
          href: 'https://fleek.xyz',
          width: 100
        },
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'ZLPPXSKTFE',
      //   // Public API key
      //   apiKey: '33ed5b78ac12317e4243d3f44874cbc8',
      //   indexName: 'fleek',
      //   // Optional: see doc section below
      //   contextualSearch: true,
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
      //   schedule: 'every 1 day at 6:00 pm',
      // },
    }),
    plugins: [
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'guides',
          path: 'guides',
          routeBasePath: '/guides',
          // `undefined` to auto-generate
          sidebarPath: undefined,
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          ...commonDocsOptions,
        }),
      ],
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'templates',
          path: 'templates',
          routeBasePath: '/templates',
          // `undefined` to auto-generate
          sidebarPath: undefined,
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          ...commonDocsOptions,
        }),
      ],
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'changelog',
          path: 'changelog',
          routeBasePath: '/changelog',
          // `undefined` to auto-generate
          sidebarPath: undefined,
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          ...commonDocsOptions,
        }),
      ],
    ],    
};

module.exports = config;
