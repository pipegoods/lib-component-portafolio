const toKebabCase = (string: string) =>
  string
    .replace(/([A-Z])([A-Z])/g, "$1-$2")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export default toKebabCase;
