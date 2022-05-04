const cache = {};
function factorial(n) {
  if (n === 0) return 1;
  if (n in cache) return cache[n];
  return n * factorial(n - 1);
}

console.log(factorial(5));
