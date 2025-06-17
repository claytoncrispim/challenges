const referenceObj = {
  name: "John", 
  surname: "Doe", 
  age: 43
};

const group = [{name: "Mary", surname: "Joe", age: 56}, [{name: "Henry", surname: "Cavill"}]];

const myCollection = [
    { "apple": 1, "bat": 2, "cookie": 2 },
    { "bat": 2 },
    { "apple": 1 }
];

const mySource = { "apple": 1, "bat": 2 };

function whatIsInAName(collection, source) {
  const matchingObjects = [];
  
  for (let i = 0; i < collection.length; i ++) {
    const currentCollectionObject = collection[i];
   	const sourceKeys = Object.keys(source);
      
		let isMatch = true;
			
			sourceKeys.forEach((key) =>{
				if (!currentCollectionObject.hasOwnProperty(key) || currentCollectionObject[key] !== source[key] ) {
					
				isMatch = false;
			
				}
			});
		
		if (isMatch) {
			matchingObjects.push(currentCollectionObject);
		}

  }
  
  return matchingObjects;
}



console.log(whatIsInAName(myCollection, mySource));