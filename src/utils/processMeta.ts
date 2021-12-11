export const processMeta = (items: any, filter?: string): string => {
  if (!items) {
    return '';
  }
  if (Function.prototype.isPrototypeOf(items)) {
    items = items();
  }
  if (filter) {
    items = Object.keys(items)
      .filter((key) => filter.includes(key))
      .reduce((obj: any, key: any) => {
        obj[key] = items[key];
        return obj;
      }, {});
  }
  items = Object.keys(items).reduce(
    (item, index) => item.concat(items[index]),
    []
  );
  let tags = [];
  if (items && items.length > 0) {
    tags = items.map((item: any) => {
      const htmlTag = item.htmlTag || 'meta';
      let json = null;
      let attributes = Object.entries(item).map(([key, value]) => {
        if (key === 'htmlTag') return;
        if (key === 'json') {
          json = value;
          return;
        }
        return `${key}="${value}"`;
      });
      if (json) {
        return `<${htmlTag} ${attributes.join(' ')}>${json}</${htmlTag}>`;
      }
      return `<${htmlTag} ${attributes.join(' ')} />`;
    });
  }
  return tags.join('\n');
};
