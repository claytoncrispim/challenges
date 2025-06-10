function isPalindrome(str) {
  
  const lwStr = str.toLowerCase();
  const revStr = lwStr.split("").reverse().join("");
  
  // console.log(str);
  // console.log(revStr);


    if (lwStr === revStr) {
      //console.log(true);
      return true;
    } else {
      //console.log(false);
      return false;
    }
}

console.log (isPalindrome("anna"));