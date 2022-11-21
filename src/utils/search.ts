export function debounce<F extends (...params: any[]) => any>(
  fn: F,
  delay: number
) {
  let timeoutID: number = null;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
  } as F;
}
