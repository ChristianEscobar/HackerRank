function repeatedString(s, n) {
	let stringLen = s.length;
	let counter = 0;
	let totalAs = getNumberOfAs(s);

	let multiplier = 0;
	if (n % stringLen === 0) {
		multiplier = n / stringLen;
		counter = totalAs * multiplier;
	} else {
		multiplier = Math.floor(n / stringLen);
		counter = totalAs * multiplier;
		let remainingChars = n - multiplier * stringLen;
		counter += getNumberOfAs(s, remainingChars);
	}

	return counter;
}

function getNumberOfAs(s, totalChars = -1) {
	function countAs(s) {
		return s.split('').filter((char) => {
			if (char === 'a') {
				return char;
			}
		}).length;
	}

	let result = 0;
	let substring = s;
	if (totalChars > -1) {
		substring = s.substring(0, totalChars);
	}

	result = countAs(substring);
	return result;
}

let s = '';
let n = '';

// s = 'abcac';
// n = 10;
// console.log(repeatedString(s, n));

// s = 'aba';
// n = 10;
// console.log(repeatedString(s, n));

// s = 'a';
// n = 1000000000000;
// console.log(repeatedString(s, n));

s = 'aab';
n = 882787;
console.log(repeatedString(s, n));
// 588525

// const s4 = 'abaa';
// const n4 = 8;
// console.log(repeatedString(s4, n4));
