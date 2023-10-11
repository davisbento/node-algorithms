// // PROBLEM:
// I have two sets of number like [12, 11] and [12, 12, 19. 14]
// I want to check if the numbers contain in both sets and return the common numbers.
// Also I want to show in the final result the same amount of times that this number appears in both sets

function findCommonNumbersWithFrequency(set1: number[], set2: number[]) {
	// Create a map to count the occurrences of each number in both sets
	const count1 = new Map();
	const count2 = new Map();

	// Count the occurrences in set1
	for (const num of set1) {
		count1.set(num, (count1.get(num) || 0) + 1);
	}

	// Count the occurrences in set2
	for (const num of set2) {
		count2.set(num, (count2.get(num) || 0) + 1);
	}

	// Find the common numbers and their frequency
	const commonNumbers = [];
	for (const [num, count] of count1) {
		if (count2.has(num)) {
			const minFrequency = Math.min(count, count2.get(num));
			for (let i = 0; i < minFrequency; i++) {
				commonNumbers.push(num);
			}
		}
	}

	return commonNumbers.sort((a, b) => a - b);
}

const set1 = [12, 11, 19, 14, 12, 11, 19, 11, 12, 11];
const set2 = [12, 12, 19, 14];

const result = findCommonNumbersWithFrequency(set1, set2);
console.log(result);
