export const times = (length: number): Array<number> => {
  return Array.from({ length }, (_, i) => i);
};

export const swapItems = (arr: Array<any>, i: number, j: number) => arr.map((item, index) => {
  if (index === i) return arr[j];
  if (index === j) return arr[i];
  return item;
});