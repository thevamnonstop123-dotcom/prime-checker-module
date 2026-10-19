function isPrime(num) {
  // 1 and numbers less than 1 are not prime
  if (num <= 1) return false;
  
  // Check for divisors from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a divisor, so it's not prime
    }
  }
  
  return true; // No divisors found, it is prime
}

// Named export using module.exports
module.exports = { isPrime };