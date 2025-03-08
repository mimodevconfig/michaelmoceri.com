# Michael Moceri's Portfolio Website

This is my personal portfolio website showcasing my projects, skills, and blog. Feel free to use this as a template for your own portfolio. This website is based on my other repository located at: [https://github.com/mimodevconfig/AI-Dev-Portfolio](https://github.com/mimodevconfig/AI-Dev-Portfolio).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
  - [Personal Information](#personal-information)
  - [Projects](#projects)
  - [Skills](#skills)
  - [Experience](#experience)
  - [Blog](#blog)
- [Image Management](#image-management)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

This portfolio website is built with React, TypeScript, and Tailwind CSS. It features a modern, responsive design with interactive elements like a skills network map, project showcases, and a blog system.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Automatic theme switching based on user preferences
- **Interactive Skills Network**: Visual representation of skills and their relationships
- **Project Showcase**: Highlight your best work with images and descriptions
- **Blog System**: Share your thoughts and insights with a built-in blog
- **SEO Friendly**: Optimized for search engines
- **Fast Performance**: Built with Vite for quick loading times
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for easy styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:5173`.

### Building for Production

Build the project for production:
```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
/
├── public/               # Static assets
│   └── images/           # Image assets (see Image Management section)
├── src/
│   ├── components/       # React components
│   │   ├── blocks/       # Reusable block components
│   │   ├── blog/         # Blog-related components
│   │   └── ui/           # UI components (buttons, inputs, etc.)
│   ├── lib/              # Utility functions and helpers
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Customization Guide

### Personal Information

Edit the Hero component to update your name, title, and introduction:
```
src/components/Hero.tsx
```

### Projects

Add your projects by updating the Projects component:
```
src/components/Projects.tsx
```

For each project, you'll need:
- Title
- Description
- Technologies used
- Images (see Image Management section)
- Links to live demo and source code (if available)

### Skills

Customize your skills network in the Skills component:
```
src/components/Skills.tsx
```

The skills are represented as nodes in a network graph, with related skills connected by links.

### Experience

Update your work experience in the Experience component:
```
src/components/Experience.tsx
```

### Blog

Blog posts are written in Markdown and stored in:
```
src/content/blog/
```

Each blog post should include frontmatter with:
- title
- date
- excerpt
- category
- tags
- coverImage

## Image Management

Images are organized in the following structure:

```
/public
  /images
    /avatar           # Profile photos
    /hero             # Hero section images
    /projects         # Project thumbnails and detail images
      /3d-printing-calculator
      /local-ai-inference-server
      /ai-research-platform
    /blog             # Blog post images
      /covers         # Blog post cover images
      /content        # Images used within blog posts
    /testimonials     # Testimonial author images
    /skills           # Skill/technology logos
```

### How to Add Images

#### Profile Avatar

1. Add your profile photo to `/public/images/avatar/profile.jpg`
2. The image will automatically be used in the Hero section

#### Project Images

For each project, add the following:

1. Main cover image: `/public/images/projects/[project-id]/cover.jpg`
2. Detail images (optional): `/public/images/projects/[project-id]/detail1.jpg`, `detail2.jpg`, etc.

Where `[project-id]` is one of:
- `3d-printing-calculator`
- `local-ai-inference-server`
- `ai-research-platform`

#### Blog Post Images

1. Cover images: `/public/images/blog/covers/[post-slug].jpg`
2. Content images: `/public/images/blog/content/[post-slug]/[image-name].jpg`

Where `[post-slug]` is the URL slug of your blog post.

### Image Recommendations

- **Profile Photo**: Square aspect ratio, at least 500x500px
- **Project Covers**: 16:9 aspect ratio, at least 1200x675px
- **Blog Covers**: 16:9 aspect ratio, at least 1200x675px
- **Content Images**: Any size, but keep file sizes reasonable (< 500KB)

### Fallback Images

The website includes fallback images in case local images aren't found. This allows you to develop and deploy the site before adding all your images.

### Image Utility Functions

The `src/lib/imageUtils.ts` file contains helper functions for referencing images:

- `getImageUrl(path)`: Get URL for any image
- `getProjectImageUrl(projectId, filename)`: Get project image URL
- `getBlogCoverUrl(slug)`: Get blog cover image URL
- `getBlogContentImageUrl(slug, filename)`: Get blog content image URL
- `getAvatarUrl(filename)`: Get avatar image URL

### Example Usage in Markdown

When writing blog posts, reference images like this:

```markdown
![Image description](/images/blog/content/my-post-slug/image1.jpg)
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Routing library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [D3-Force](https://github.com/d3/d3-force) - Force simulation for the skills network
- [React Force Graph](https://github.com/vasturiano/react-force-graph) - Graph visualization
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please fork the repository and submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
