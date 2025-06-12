const phrase = "home is where the heart is."

function titleCase(str){
  const words = str.split(" "); // Splits the sentence into an array of words
  
  const titleCaseWords = words.map((word) => { // Uses map to transform each word individually
    const upperCase = word.slice(0, 1).toUpperCase(); // Gets the first character and makes it uppercase
    const lowerCase = word.slice(1).toLowerCase();    // Gets the rest of the word and makes it lowercase
                                                      // (word.length is optional here, slice(1) goes to the end)
    const titleCasedWord = upperCase + lowerCase;    // Combines the uppercase first letter with the lowercase rest
    
    return titleCasedWord; // Returns the newly title-cased word for the map to collect
  });
  
  return titleCaseWords.join(" "); // Joins all the title-cased words back into a single sentence string
}

console.log(titleCase(phrase));
// Outputs: "Home Is Where The Heart Is." - Exactly what we wanted!