const camelCaseRegex = /([a-z])([A-Z])/g;
const separatorRegex = /[\s_ -]/g; // Matches space, underscore, or existing dash

function spinalCase(str) {
  let transformedStr = str.replace(camelCaseRegex, '$1-$2');
  transformedStr = transformedStr.replace(separatorRegex, '-');
  transformedStr = transformedStr.toLowerCase();
  return transformedStr;
}

console.log(spinalCase("This Is Spinal Tap"));      // Expected: "this-is-spinal-tap"
console.log(spinalCase("thisIsSpinalTap"));     // Expected: "this-is-spinal-tap"
console.log(spinalCase("The_Andy_Griffith_Show")); // Expected: "the-andy-griffith-show"
console.log(spinalCase("Teletubbies say Eh-oh")); // Expected: "teletubbies-say-eh-oh"
console.log(spinalCase("AllThe-small Things"));