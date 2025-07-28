function sumFibs(num) {
  // 1. Initialize variables for summing and Fibonacci generation.
  //    totalSum: Will store the sum of odd Fibonacci numbers. Starts at 0.
  //    prevFib: Stores the (n-2)th Fibonacci number. Initialized to 0 to correctly
  //             generate the first '1' in the sequence (0 + 1 = 1) in the loop.
  //    currFib: Stores the (n-1)th Fibonacci number (or the current one being processed).
  //             Initialized to 1 as the first Fibonacci number to check.
  let totalSum = 0;
  let prevFib = 0;
  let currFib = 1;

  // 2. Loop through the Fibonacci sequence as long as the current number
  //    is less than or equal to the input 'num'.
  while (currFib <= num) {
    // 3. Check if the current Fibonacci number (currFib) is odd.
    //    The modulo operator (%) returns the remainder of a division.
    //    If currFib divided by 2 has a remainder NOT equal to 0, it's odd.
    if (currFib % 2 !== 0) {
      // 4. If currFib is odd, add it to our running totalSum.
      totalSum += currFib;
    }

    // 5. Calculate the next Fibonacci number in the sequence.
    //    It's the sum of the two preceding numbers (prevFib and currFib).
    const nextFib = currFib + prevFib;

    // 6. Update prevFib and currFib for the next iteration of the loop.
    //    The 'current' Fibonacci number becomes the 'previous' one for the next step.
    prevFib = currFib;
    //    The 'next' Fibonacci number just calculated becomes the new 'current' one.
    currFib = nextFib;
  }

  // 7. After the loop completes (when currFib exceeds num),
  //    return the final sum of all odd Fibonacci numbers found.
  return totalSum;
}

// Example usage to test the function:
console.log(sumFibs(10)); // Expected output: 10 (1 + 1 + 3 + 5)
console.log(sumFibs(1)); // Expected output: 2 (1 + 1)
console.log(sumFibs(4)); // Expected output: 5 (1 + 1 + 3)