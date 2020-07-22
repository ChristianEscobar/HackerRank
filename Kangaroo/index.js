// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
	let kangaroo1 = x1;
	let kangaroo2 = x2;

	if (x1 === x2 && v1 === v2) {
		return 'YES';
	}

	for (let i = 0; i < 10000; i++) {
		kangaroo1 += v1;
		kangaroo2 += v2;

		if (kangaroo1 === kangaroo2) {
			return 'YES';
		}
	}

	return 'NO';
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
