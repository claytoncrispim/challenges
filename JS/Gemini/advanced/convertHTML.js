function convertHTML(str) {
  let convertedStr = ""; // Correctly initialized with 'let' for modification

  for (let i = 0; i < str.length; i++) { // Correctly loops through each character
    const char = str[i];                 // Gets the current character

    switch (char) { // Uses a switch statement for clear, specific handling
      case "&":
        convertedStr += '&amp;'; // Appends the HTML entity for '&'
        break;
      case "<":
        convertedStr += '&lt;';  // Appends the HTML entity for '<'
        break;
      case ">":
        convertedStr += '&gt;';  // Appends the HTML entity for '>'
        break;
      case "\"":
        convertedStr += '&quot;'; // Appends the HTML entity for '"'
        break;
      case "'":
        convertedStr += '&apos;'; // Appends the HTML entity for '''
        break;
      default:
        convertedStr += char;    // Appends the character as is if it's not special
    }
  }
  return convertedStr; // Returns the fully converted string after the loop
}

// Test with examples:
console.log(convertHTML("Dolce & Gabbana"));           // Expected: "Dolce &amp; Gabbana"
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Expected: "Hamburgers &lt; Pizza &lt; Tacos"
console.log(convertHTML("Sixty > twelve"));            // Expected: "Sixty &gt; twelve"
console.log(convertHTML('Stuff in "quotation marks"')); // Expected: "Stuff in &quot;quotation marks&quot;"
console.log(convertHTML("Schindler's List"));          // Expected: "Schindler&apos;s List"
console.log(convertHTML("<>"));                      // Expected: "&lt;&gt;"
console.log(convertHTML("abc"));                     // Expected: "abc"