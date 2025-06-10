function countVowels(str){
    const vowels = ["a", "e", "i", "o", "u"];
    const lwStr = str.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < lwStr.length; i++) {
        if (vowels.includes(lwStr[i])) {
             vowelCount++;
        }
    }
    return vowelCount;
}

console.log(countVowels("Gran Canaria"));