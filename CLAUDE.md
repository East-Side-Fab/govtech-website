# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Package Management
- Install dependencies: `npm install` or `yarn`
- The project requires Node.js >=18.0

### Development Server
- Start local development: `npm run start` or `yarn start`
- Opens browser with live reload at http://localhost:3000

### Build and Deploy
- Build for production: `npm run build` or `yarn build`
- TypeScript type checking: `npm run typecheck`
- Serve built files locally: `npm run serve`
- Deploy to GitHub Pages: `yarn deploy` (or `USE_SSH=true yarn deploy` for SSH)

### Docusaurus Commands
- Clear cache: `npm run clear`
- Swizzle components: `npm run swizzle`
- Generate translations: `npm run write-translations`

## Architecture Overview

### Framework and Structure
- **Docusaurus 3.7.0**: Modern static site generator with React
- **TypeScript**: Full TypeScript support with @docusaurus/tsconfig
- **Component Architecture**: Custom React components in `src/components/`
- **Content Management**: Markdown docs in `docs/`, blog posts in `blog/`
- **Static Assets**: Images and data files in `static/`

### Key Components
- **Interactive Components**: All custom components use CSS modules (`.module.css`) for styling
- **Data Loading**: Components fetch data from `static/data/` (e.g., `topics.json`)
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Accessibility**: Components implement ARIA attributes and keyboard navigation

### Configuration Files
- **docusaurus.config.ts**: Main site configuration, navigation, theme settings
- **sidebars.ts**: Documentation sidebar structure  
- **tsconfig.json**: TypeScript configuration extending @docusaurus/tsconfig

### Content Structure
- **Pages**: Custom React pages in `src/pages/` (index.tsx, anmelden.tsx, events.tsx)
- **Documentation**: Organized in `docs/` with categories (guidelines, location, schedule, sponsors)
- **Blog**: Event announcements and updates in `blog/`
- **Multilingual**: Currently English only, configured for expansion

### Styling Approach
- **CSS Modules**: Component-specific styles (e.g., `TopicCarousel/styles.module.css`)
- **Global Styles**: Custom CSS variables and overrides in `src/css/custom.css`
- **Dark Mode**: Fixed dark mode (disableSwitch: true) with custom styling
- **Theme**: Prism themes for code highlighting (github/dracula)

### Data Management
- **Static JSON**: Topic/challenge data stored in `static/data/topics.json`
- **External Links**: Social media, maps, and external resources configured in docusaurus.config.ts
- **SEO**: Meta tags, social cards, and structured data configured

### Deployment
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Organization**: East-Side-Fab organization
- **URL**: https://hackathon.govtech.saarland
- **Build Output**: Static files generated to `build/` directory