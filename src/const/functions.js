const fibbonacci = (n) => {
  if (n <= 1) return n;
  return fibbonacci(n - 1) + fibbonacci(n - 2);
}


const factorial = (n) => {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}   

