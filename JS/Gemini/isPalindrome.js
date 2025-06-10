function isPalindrome(ref, str) {
    const refStr = ref.toLowerCase().split("").reverse().join("");

    if (ref === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

const str1 = "home";
const str2 = "racecar";