export function random(min: number, max: number) {
  const rand = Math.random();
  return rand * (max - min) + min;
}
