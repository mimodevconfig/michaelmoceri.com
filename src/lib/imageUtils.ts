/**
 * Image utility functions for managing and referencing images
 */

/**
 * Get the URL for an image in the public directory
 * @param path Path to the image relative to the /public/images directory
 * @returns Full path to the image
 */
export function getImageUrl(path: string): string {
  return `/images/${path}`;
}

/**
 * Get project image URL
 * @param projectId The project ID
 * @param filename The image filename
 * @returns Full path to the project image
 */
export function getProjectImageUrl(projectId: string, filename: string): string {
  return getImageUrl(`projects/${projectId}/${filename}`);
}

/**
 * Get blog cover image URL
 * @param slug The blog post slug
 * @returns Full path to the blog cover image
 */
export function getBlogCoverUrl(slug: string): string {
  return getImageUrl(`blog/covers/${slug}.jpg`);
}

/**
 * Get blog content image URL
 * @param slug The blog post slug
 * @param filename The image filename
 * @returns Full path to the blog content image
 */
export function getBlogContentImageUrl(slug: string, filename: string): string {
  return getImageUrl(`blog/content/${slug}/${filename}`);
}

/**
 * Get avatar image URL
 * @param filename The avatar image filename
 * @returns Full path to the avatar image
 */
export function getAvatarUrl(filename: string = 'default.jpg'): string {
  return getImageUrl(`avatar/${filename}`);
}

/**
 * Default image URLs to use as fallbacks
 */
export const defaultImages = {
  avatar: getAvatarUrl(),
  projectCover: getImageUrl('projects/default-project.jpg'),
  blogCover: getImageUrl('blog/covers/default.jpg'),
  hero: getImageUrl('hero/default.jpg'),
};
