// Complete the superReducedString function below.
function superReducedString(s) {
	let result = s;
	for (let i = 1; i < result.length; i++) {
		if (result[i] === result[i - 1]) {
			// remove pairs
			result = result.substring(0, i - 1) + result.substring(i + 1);
			i = 0;
		}
	}

	if (result.length === 0) {
		result = 'Empty String';
	}

	return result;
}

// console.assert(superReducedString('aaabccddd') === 'abd');
// console.assert(superReducedString('aaabccddde') === 'abde');
// console.assert(superReducedString('aaabccdddee') === 'abd');
// console.assert(superReducedString('aabb') === 'Empty String');
// console.assert(superReducedString('abcdefghijklmnop') === 'abcdefghijklmnop');
console.assert(superReducedString('baab') === 'Empty String');
// console.assert(
// 	superReducedString(
// 		'kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuerhhsanpdtmrzibswswzjjbjqytgfewiuu'
// 	) ===
// 		'kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuersanpdtmrzibswswzbjqytgfewi'
// );
