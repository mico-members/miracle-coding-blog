export function timeCalculator(created: string) {
  const now = new Date();
  const offset = new Date().getTimezoneOffset() * 60000;

  const today = new Date(now.getTime() - offset)
    .toISOString()
    .slice(0, 10)
    .split('-');
  const createDay = created.split('-');
  if (today[0] === createDay[0] && today[1] === createDay[1]) {
    if (+today[2] - +createDay[2] === 0) return 'today';
    if (+today[2] - +createDay[2] === 1) return 'yesterday';
    if (+today[2] - +createDay[2] === 2) return '2 days ago';
  }

  return created;
} 

export function setTextColor(code: string): string {
  const red = code.slice(1, 3);
  const green = code.slice(3, 5);
  const blue = code.slice(5, 7);
  const isDark =
    parseInt(red, 16) > parseInt('A0', 16) &&
    parseInt(green, 16) > parseInt('A0', 16) &&
    parseInt(blue, 16) > parseInt('A0', 16);
  return isDark ? '#000000' : '#FFFFFF';
}

export function debounce<F extends (...args: any) => any>(
    func: F,
    delay: number
   ) {
    let timeout: NodeJS.Timeout;
    const debounced = (...args: any) => {
     clearTimeout(timeout);
     timeout = setTimeout(() => func(...args), delay);
    };
   
    return debounced as (...args: Parameters<F>) => ReturnType<F>;
   }
   
}

type TConditionEmoji = '😥' | '😑' | '🙂' | '😀' | '😆👍' | '❓';

export function renderConditionEmoji(condition: number): TConditionEmoji {
  if (condition >= 0 && condition <= 2) return '😥';
  if (condition <= 4) return '😑';
  if (condition <= 6) return '🙂';
  if (condition <= 8) return '😀';
  if (condition <= 10) return '😆👍';
  return '❓';
}

