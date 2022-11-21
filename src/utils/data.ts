export function getYearFromString(dateString: string): number {
  return new Date(dateString).getFullYear();
}
