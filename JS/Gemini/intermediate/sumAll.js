const arr1 = [1, 4];
const arr2 = [3, 11];

function sumAll(arr){
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);
  let counter = 0;
  
  for (let i = minNum; i <= maxNum; i++){
    counter += i;
  }
  return counter;
  
}

console.log(sumAll([45,55]));
console.log(sumAll(arr1));
console.log(sumAll(arr2));