// Build URLs that respect Vite's `base` (so links work on GitHub Pages
// under /hubexo-essentials/ as well as at the root in dev).

/** A file living in /public. Pass a path relative to /public, or a full URL. */
export function publicUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}

/** A downloadable template in /public/templates/. `file` may contain spaces. */
export function templateUrl(file: string): string {
  return import.meta.env.BASE_URL + 'templates/' + encodeURIComponent(file)
}
