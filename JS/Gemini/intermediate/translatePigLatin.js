function translatePigLatin(str) {
  const vowelCaseRegex = /^[aeiou]/i; // Regex to check if the word starts with a vowel
  const anyVowelRegex = /[aeiou]/i;   // Regex to find the first vowel anywhere in the word

  const found = str.match(vowelCaseRegex); // Checks if Rule 1 applies

  if(found) { // Rule 1: If word begins with a vowel
    return str + "way"; // Just add "way" to the end
  } else {    // If word does NOT begin with a vowel (consonant start or no vowels)
    const firstVowelIndex = str.search(anyVowelRegex); // Find the index of the first vowel anywhere in the word
    
    // Rule 2: If a vowel IS found (meaning there's a consonant cluster at the beginning)
    if (firstVowelIndex != -1) { 
      // Slice the word: part after first vowel + consonant cluster + "ay"
      return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
    } 
    // Rule 3: If no vowels are found at all (firstVowelIndex is -1)
    // Note: 'else if (firstVowelIndex === -1)' is functionally correct,
    // though a simple 'else' would also work here since this is the only remaining possibility.
    else if (firstVowelIndex === -1) { 
      return str + "ay"; // Just add "ay" to the entire word
    }
  }
}

// Test with your examples:
console.log(translatePigLatin("strawberry")); // Output: "awberrystray" - Correct!
console.log(translatePigLatin("airport"));    // Output: "airportway"   - Correct!
console.log(translatePigLatin("rhythm"));      // Output: "rhythmay"     - Correct!
console.log(translatePigLatin("dry"));        // Output: "dryay"        - Correct!
console.log(translatePigLatin("initial"));    // Output: "initialway"   - Correct!