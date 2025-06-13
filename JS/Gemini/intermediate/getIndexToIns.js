function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  
  for (let i = 0; i <= arr.length; i++) {
      if (num <= arr[i]) {
        
        return i;
    
      }
    }
  return arr.length;
}

const numbers = [1951, 74, 1954, 71, 1980, 45, 1981, 44, 1982, 43, 1991, 35];

console.log(getIndexToIns(numbers, 2020));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // Expected output: 3
console.log(getIndexToIns([5, 3, 20, 3], 5));     // Expected output: 2
console.log(getIndexToIns([40, 60], 50));         // Expected output: 1
console.log(getIndexToIns([], 1));                // Expected output: 0
console.log(getIndexToIns([2, 5, 10], 15));       // Expected output: 3