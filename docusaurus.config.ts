import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const isProd = process.env.NODE_ENV === "production";

// This config runs in Node.js, so avoid using browser APIs or JSX here.
const config: Config = {
  title: "GovTech Hackathon",
  tagline: "Boost the Public Sector",
  favicon: "img/favicon.ico",
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
    },
  ],

  // The production URL of your site
  url: "https://govtech-hackathon.example.com",
  // The /<baseUrl>/ pathname under which your site is served
  baseUrl: isProd ? "/govtech-website/" : "/", // lokaler Modus vs. Produktion

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you can remove these.
  organizationName: "East-Side-Fab", // Your GitHub org/user name
  projectName: "govtech-website", // Your repo name

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Set the default language for the site
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Adjust the editUrl to point to your own GitHub repository.
          editUrl:
            "https://github.com/YourOrg/govtech-hackathon-site/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/YourOrg/govtech-hackathon-site/tree/main/",
          // Enforce best practices in blog posts
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card or a relevant image
    image: "img/hackathon-social-card.jpg",
    navbar: {
      title: "GovTech Hackathon",
      items: [
        // Example docs link
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/anmelden", label: "Anmelden", position: "left" },
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/East-Side-Fab/govtech-website",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Resources",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/yourorg",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/YourOrg/govtech-hackathon-site",
            },
          ],
        },
      ],
      // Update the copyright
      copyright: `Copyright © ${new Date().getFullYear()} GovTech Hackathon. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
