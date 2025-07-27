// --- isPrime Helper Function ---
function isPrime(numToTest) {
    if (numToTest <= 1) { 
        return false;
    }
    if (numToTest === 2) { 
        return true;
    }
    // The 'if (numToTest > 2)' is not strictly necessary as code reaching here must be > 2,
    // but it doesn't cause any errors.
    if (numToTest > 2) { 
        for (let i = 2; i < numToTest; i++) {
            if (numToTest % i === 0) { 
                return false; 
            }
        }
    }
    return true; 
}

// --- sumPrimes Main Function ---
function sumPrimes(num) {
    let totalSum = 0; // Initialize the sum

    // Loop through numbers from 2 up to 'num' (inclusive)
    for (let i = 2; i <= num; i++) {
        // Check if the current number 'i' is prime using the helper function
        if (isPrime(i)) { // '=== true' is optional, as isPrime returns a boolean
            totalSum += i; // Add the prime number to the total sum
        }
    }

    return totalSum; // Return the final sum of primes
}

// Test with examples:
console.log(sumPrimes(10));  // Expected output: 17 (2 + 3 + 5 + 7)
console.log(sumPrimes(977)); // Expected output: 73156
console.log(sumPrimes(2));   // Expected output: 2
console.log(sumPrimes(1));   // Expected output: 0
console.log(sumPrimes(0));   // Expected output: 0