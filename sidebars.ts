import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration according to issue #8
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'GovTech Hackathon',
    },
    {
      type: 'category',
      label: 'Ablauf',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'schedule/overview',
      },
      items: [
        'schedule/day1',
        'schedule/day2',
      ],
    },
    {
      type: 'doc',
      id: 'location/directions',
      label: 'Anfahrt',
    },
    {
      type: 'doc',
      id: 'guidelines/code-of-conduct',
      label: 'Guidelines',
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
    {
      type: 'doc',
      id: 'sponsors/sponsor-list',
      label: 'Sponsoren',
    },
  ],
};

export default sidebars;