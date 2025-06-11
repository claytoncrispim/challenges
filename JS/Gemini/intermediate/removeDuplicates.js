const shoppingList = ["oranges", "bread", "7Up", "oranges", "cheese", "bread"];

function removeDuplicates(arr){
  const uniqueElements = new Set(arr);
  
  return [...uniqueElements];

}

console.log(removeDuplicates(shoppingList));