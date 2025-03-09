// Utility functions for handling images

/**
 * Get the URL for a project image
 * @param projectId The ID of the project
 * @param imageName The name of the image file (default: 'cover.jpg')
 * @returns The URL to the project image
 */
export function getProjectImageUrl(projectId: string, imageName: string = 'cover.jpg'): string {
  return `/images/projects/${projectId}/${imageName}`;
}

/**
 * Get the URL for a blog cover image
 * @param slug The slug of the blog post
 * @returns The URL to the blog cover image
 */
export function getBlogCoverUrl(slug: string): string {
  return `/images/blog/covers/${slug}.jpg`;
}

/**
 * Get the URL for a blog content image
 * @param slug The slug of the blog post
 * @param imageName The name of the image file
 * @returns The URL to the blog content image
 */
export function getBlogContentImageUrl(slug: string, imageName: string): string {
  return `/images/blog/content/${slug}/${imageName}`;
}

/**
 * Get the URL for a testimonial avatar
 * @param id The ID of the testimonial
 * @returns The URL to the testimonial avatar
 */
export function getTestimonialAvatarUrl(id: string): string {
  return `/images/testimonials/${id}.jpg`;
}

/**
 * Get the URL for a skill icon
 * @param skill The name of the skill
 * @returns The URL to the skill icon
 */
export function getSkillIconUrl(skill: string): string {
  return `/images/skills/${skill.toLowerCase().replace(/\s+/g, '-')}.svg`;
}

/**
 * Get the URL for a company logo
 * @param company The name of the company
 * @returns The URL to the company logo
 */
export function getCompanyLogoUrl(company: string): string {
  return `/images/experience/${company.toLowerCase().replace(/\s+/g, '-')}.svg`;
}

/**
 * Generic function to get image URL (alias for backward compatibility)
 * @param path The path to the image
 * @returns The URL to the image
 */
export function getImageUrl(path: string): string {
  return `/${path}`;
}
