# Image Management for michaelmoceri.com

This document outlines how to manage images for the website.

## Directory Structure

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

## How to Add Images

### Profile Avatar

1. Add your profile photo to `/public/images/avatar/profile.jpg`
2. The image will automatically be used in the Hero section

### Project Images

For each project, add the following:

1. Main cover image: `/public/images/projects/[project-id]/cover.jpg`
2. Detail images (optional): `/public/images/projects/[project-id]/detail1.jpg`, `detail2.jpg`, etc.

Where `[project-id]` is one of:
- `3d-printing-calculator`
- `local-ai-inference-server`
- `ai-research-platform`

### Blog Post Images

1. Cover images: `/public/images/blog/covers/[post-slug].jpg`
2. Content images: `/public/images/blog/content/[post-slug]/[image-name].jpg`

Where `[post-slug]` is the URL slug of your blog post.

## Image Recommendations

- **Profile Photo**: Square aspect ratio, at least 500x500px
- **Project Covers**: 16:9 aspect ratio, at least 1200x675px
- **Blog Covers**: 16:9 aspect ratio, at least 1200x675px
- **Content Images**: Any size, but keep file sizes reasonable (< 500KB)

## Fallback Images

The website includes fallback images in case local images aren't found. This allows you to develop and deploy the site before adding all your images.

## Image Utility Functions

The `src/lib/imageUtils.ts` file contains helper functions for referencing images:

- `getImageUrl(path)`: Get URL for any image
- `getProjectImageUrl(projectId, filename)`: Get project image URL
- `getBlogCoverUrl(slug)`: Get blog cover image URL
- `getBlogContentImageUrl(slug, filename)`: Get blog content image URL
- `getAvatarUrl(filename)`: Get avatar image URL

## Example Usage in Markdown

When writing blog posts, reference images like this:

```markdown
![Image description](/images/blog/content/my-post-slug/image1.jpg)
```
