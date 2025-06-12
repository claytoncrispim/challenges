const sampleArr = [7, "ate", "", false, 9];

function bouncer(arr) {
  const newArray = arr.filter(item => item);
  
  return newArray;
}

console.log(bouncer(sampleArr));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));