let phrase = "Home is where the heart is."; // Example usage outside the function

function findLongestWord(sentence) {
    const wordsArray = sentence.split(" "); // Splits the sentence into an array of words
    let lgstWord = "";                   // Initializes variable to hold the longest word found so far
    let lengthLgstWord = lgstWord.length; // Initializes its length (0)

    for (const word of wordsArray) {     // Iterates through each word in the array
        // Cleans the word: converts to lowercase and removes any non-alphanumeric characters
        const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

        // Checks if the cleaned word is longer than the current longest, AND
        // ensures it's not an empty string (e.g., from just punctuation)
        if (cleanedWord.length > lengthLgstWord && cleanedWord.length > 0) {
            lgstWord = cleanedWord;           // Updates the longest word
            lengthLgstWord = cleanedWord.length; // Updates the longest length
        }
    }

    return lgstWord; // Returns the final longest word found
}

console.log(findLongestWord(phrase));                             // Outputs: "where"
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Outputs: "jumped"
console.log(findLongestWord("Google Apple Microsoft"));         // Outputs: "microsoft"
console.log(findLongestWord("A B C"));                             // Outputs: "a"
console.log(findLongestWord("hello world"));                     // Outputs: "hello"
console.log(findLongestWord("Hello, world!"));                   // Outputs: "hello" (correctly handles punctuation and case)
console.log(findLongestWord("!!!!!!!!!"));                        // Outputs: "" (correctly handles all punctuation)