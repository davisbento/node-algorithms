const zeroToHundreds = Array.from({ length: 100 }, (_, i) => i + 1);

const separateIntoChunksOfTen = (arr: number[]) => {
	const result: number[][] = [];

	while (arr.length) {
		// splice mutates the original array
		// so everytime the 0-9 items are removed
		// it may impact the performance as the array grows
		// as it needs to rearrange the items
		result.push(arr.splice(0, 10));
	}

	return result;
};

console.log(separateIntoChunksOfTen(zeroToHundreds));
