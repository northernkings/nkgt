export function fixPathSlashes(path: string): string {
  return path.replace(/^\/?([^/]+(?:\/[^/]+)*)\/?$/, '/$1').replace('//', '/');
}
