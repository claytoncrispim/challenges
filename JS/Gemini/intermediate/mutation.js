const myWords = ["words", "swords"];

function mutation(arr) {
  const firstString = arr[0];      // This holds "words" (original case)
  const secondString = arr[1];     // This holds "swords" (original case)

  // These two lines convert the strings to lowercase for case-insensitive comparison
  const lowerFirst = firstString.toLowerCase();  // This holds "words" (lowercase)
  const lowerSecond = secondString.toLowerCase(); // This holds "swords" (lowercase)

  // This loop iterates through each character of the 'secondString' (which is fine,
  // as lowerSecond will have the exact same length and characters in lowercase)
  for (let i = 0; i < secondString.length; i++){
    // FIX IS HERE: You want the lowercase character to check against lowerFirst
    const char = lowerSecond[i]; // <--- Changed from 'secondSecond[i]' to 'lowerSecond[i]'

    // If 'lowerFirst' does NOT include the current 'char' (from lowerSecond)
    if (!lowerFirst.includes(char)) {
      return false; // Immediately return false.
    }
  }

  // If the loop completes without finding any missing characters,
  // it means all characters were present.
  return true;
}

console.log(mutation(myWords));