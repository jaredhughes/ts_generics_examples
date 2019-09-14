export function withoutGeneric(data: any[], key: any, value: any) {
  return data.filter((d: any) => d[key] === value);
}

export function withGeneric<T>(
  data: T[],
  key: keyof T,
  value: T[keyof T]
): T[] {
  return data.filter(d => d[key] === value);
}
