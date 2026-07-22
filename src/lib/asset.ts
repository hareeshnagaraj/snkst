/**
 * Prefix public asset paths with basePath when deployed under a subpath
 * (e.g. GitHub Pages: /snkst/images/...).
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
