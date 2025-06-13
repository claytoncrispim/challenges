const evenGroups = [11, 45, 8, 96, 55, 20, 31, 97];

function chunkArrayInGroups(arr, size) {
  
  const chunkedArray = [];
  
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
    
  }
  
  return chunkedArray;
}

console.log(chunkArrayInGroups(evenGroups, 2));