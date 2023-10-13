// receive a string and return an array of unique characters
export const uniqueStrings = (strings: string): string[] => {
	const uniqueStrings = [] as string[];
	const charSet = new Map();

	const stringAsArray = strings.split('');

	stringAsArray.forEach((char) => {
		if (!uniqueStrings.includes(char)) {
			uniqueStrings.push(char);
			charSet.set(char, true);
			return;
		}

		charSet.set(char, false);
	});

	// return the charSet where the value is true
	const uniqueChars = [] as string[];
	charSet.forEach((value, key) => {
		if (value) {
			uniqueChars.push(key);
		}
	});

	return uniqueChars;
};

uniqueStrings('aabbc');

// return TRUE if the string has ONLY unique characters
// otherwise return FALSE
export const uniqueStrings2 = (strings: string): boolean => {
	let result = true;

	const stringAsArray = strings.split('');
	const charSet = new Set();

	stringAsArray.forEach((char) => {
		if (charSet.has(char)) {
			result = false;
			return;
		}

		charSet.add(char);
	});

	return result;
};
