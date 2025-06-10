const myStr = "Home";

function reverseString(str) {
	const revStr = str.split("").reverse().join("");
	return revStr;
}