export function getPropValue(
  data: unknown,
  path: string | string[],
  defaultValue?: unknown
) {
  const propPath = Array.isArray(path) ? path : path.split(".");
  const propValue = propPath.reduce((value, key) => value?.[key], data as unknown);

  return propValue === undefined ? defaultValue : propValue;
}
