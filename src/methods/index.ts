// 防抖
export function debounce(func: () => void, delay: number = 250) {
  let timer: number = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func(), delay)
  }
}