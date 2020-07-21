function minimumBribes(q) {
	/**
	 * 	Anyone who bribed P cannot get to higher than
	 *	one position in front if P's original position,
	 *	so we need to look from one position in front
	 *	of P's original position to one in front of P's
	 *	current position, and see how many of those
	 *  positions in Q contain a number large than P.
	 *
	 *  [i-1, i, ..., P - 1, P ]
	 */

	const k = 2;
	let minBribes = 0;

	for (let i = 0; i < q.length; i++) {
		let currentNumber = i + 1;
		let whereAmI = q.indexOf(currentNumber) + 1;
		let shift = currentNumber - whereAmI;

		if (shift > 2) {
			console.log('Too chaotic');
			return;
		} else if (currentNumber !== whereAmI) {
			for (let j = i - 1; j < whereAmI - 1; j++) {
				minBribes += q[j] > currentNumber ? 1 : 0;
			}
		}
	}

	console.log(minBribes);
}

// const q = [2, 1, 5, 3, 4];
/**
 * [1, 2, 3, 4, 5]
 * [2, 1, 3, 4, 5]
 * [2, 1, 3, 5, 4]
 * [2, 1, 5, 3, 4] => 3
 */

// const q = [2, 5, 1, 3, 4];
// => Too chaotic

// const q = [5, 1, 2, 3, 7, 8, 6, 4];
const q = [1, 2, 5, 3, 7, 8, 6, 4];
minimumBribes(q);

/**
 *
 * [1, 2, 3, 4, 5, 6, 7, 8]
 * [1, 2, 3, 5, 4, 6, 7, 8]
 * [1, 2, 5, 3, 4, 6, 7, 8]
 * [1, 2, 5, 3, 4, 7, 6, 8]
 * [1, 2, 5, 3, 7, 4, 6, 8]
 * [1, 2, 5, 3, 7, 4, 8, 6]
 * [1, 2, 5, 3, 7, 8, 4, 6]
 * [1, 2, 5, 3, 7, 8, 6, 4]
 */
