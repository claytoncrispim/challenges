const myNum = [2019, 1992, 1834, 9302, 8493, 204, 58346, 382, 11, 94];

function findLargest(numbers) {
	let num = numbers[0];
		numbers.forEach((currentNumber)=> {
			if (currentNumber > num) {
				num = currentNumber; 
			}
		});
	return num;
}