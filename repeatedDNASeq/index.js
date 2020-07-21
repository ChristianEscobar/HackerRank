/**
 * Write a function to find all the 10-letter-long sequences (substrings)
 * that occur more than once in a DNA molecule.
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
	const results = [];
	const tracker = new Map();
	let currentSequence = '';
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		currentSequence = s.substring(windowStart, windowEnd + 1);
		if (currentSequence.length === 10) {
			updateTracker(currentSequence);
			currentSequence = '';
			windowStart++;
		}
	}

	for (const [key, value] of tracker) {
		if (tracker.get(key) >= 2) {
			results.push(key);
		}
	}

	function updateTracker(character) {
		if (tracker.has(character)) {
			tracker.set(character, tracker.get(character) + 1);
		} else {
			tracker.set(character, 1);
		}
	}

	return results;
};

const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';

findRepeatedDnaSequences(s);
