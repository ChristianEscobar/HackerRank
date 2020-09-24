// Complete the camelcase function below.
function camelcase(s) {
	// Using RegEx, find all Uppercase letters
	// Count the total number of Uppercase letters
	// Add 1 for the lowercase word at the beginning

	// Brute force:
	// loop thru string
	// 		check if current char is Uppercase
	//		if true -> counter ++
	// end
	// add 1 for the string lowercase letter
	if (s.length === 0) {
		return 0;
	}

	const regExp = /[A-Z]/g;
	const resultsArray = s.match(regExp);
	if (resultsArray) {
		return s.match(regExp).length + 1;
	}

	return 1;
}

console.log(camelcase('saveChangesInTheEditor'));
console.log(camelcase('one'));
