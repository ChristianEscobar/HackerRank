'use strict';

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
	// Return the minimum number of characters to make the password strong
	const numbers = '0123456789';
	const lower_case = 'abcdefghijklmnopqrstuvwxyz';
	const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const special_characters = '!@#$%^&*()-+';

	let minNumOfChars = 0;

	const counts = {
		numbers: 0,
		lower_case: 0,
		upper_case: 0,
		special_characters: 0,
	};

	for (let i = 0; i <= n; i++) {
		let currentChar = password[i];
		if (numbers.includes(currentChar)) {
			counts.numbers += 1;
		} else if (lower_case.includes(currentChar)) {
			counts.lower_case += 1;
		} else if (upper_case.includes(currentChar)) {
			counts.upper_case += 1;
		} else if (special_characters.includes(currentChar)) {
			counts.special_characters += 1;
		}
	}

	for (const key in counts) {
		if (counts[key] === 0) {
			minNumOfChars++;
		}
	}

	if (n < 6) {
		const numOfCharsForMinLength = 6 - n;
		return Math.max(numOfCharsForMinLength, minNumOfChars);
	}

	return minNumOfChars;
}

console.log(minimumNumber(3, 'Ab1')); // 3
console.log(minimumNumber(11, '#HackerRank')); // 1
console.log(minimumNumber(4, '4700')); // 3
