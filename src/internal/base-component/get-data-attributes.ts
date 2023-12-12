export function getDataAttributes(props: Record<string, string>) {
  const result: Record<string, any> = {};
  Object.keys(props).forEach((prop) => {
    if (prop.startsWith("data-")) {
      result[prop] = props[prop];
    }
  });
  return result;
}
