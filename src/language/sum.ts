export function sum(...numbers: number[]) {
  return numbers.reduce((previous, current) => (previous += current));
}

export function sumFor(...numbers: number[]) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}
