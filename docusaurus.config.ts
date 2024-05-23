import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SRO Smallpeice Handbook',
  tagline: 'Guidance for people involved in running the Smallpeice CER summer school.',
  favicon: 'img/favicon.ico',

  url: 'https://spdoc.roboticsoutreach.org/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'roboticsoutreach',
  projectName: 'smallpeice-handbook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Smallpeice CER Volunteer Handbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      copyright: `Built with love by volunteers from Southampton Robotics Outreach. Made with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
