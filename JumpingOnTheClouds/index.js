// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
	let start = 0;
	let jumps = 0;

	while (start < c.length - 1) {
		start += 2;
		if (c[start] !== 1) {
			jumps++;
		} else {
			start--;
			if (c[start] !== 1) {
				jumps++;
			}
		}
	}

	return jumps;
}

const clouds1 = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(clouds1));

const clouds2 = [0, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(clouds2));
