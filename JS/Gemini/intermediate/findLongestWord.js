let phrase = "Home is where the heart is.";

function findLongestWord(sentence) {
  const wordsArray = sentence.split(" ");
  let lgstWord = "";
  let lengthLgstWord = lgstWord.length;
  
  for (const word of wordsArray) {
      const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    // console.log(cleanedWord);
    if (cleanedWord.length > lengthLgstWord && cleanedWord.length > 0)   {
      lgstWord = cleanedWord;
      lengthLgstWord = cleanedWord.length;
    }
  }
     
  return lgstWord;
  
}

console.log(findLongestWord(phrase)); 