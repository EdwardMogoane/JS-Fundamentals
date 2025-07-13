function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const argument = process.argv[2];

const num = parseInt(argument);

console.log(factorial(num));