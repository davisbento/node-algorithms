import { uniqueStrings } from '.';

describe('uniqueStrings', () => {
	it('should return an array of unique strings C', () => {
		const result = uniqueStrings('aabbc');
		expect(result).toEqual(['c']);
	});

	it('should return an array of unique strings AC', () => {
		const result = uniqueStrings('abbc');
		expect(result).toEqual(['a', 'c']);
	});

	it('should return an empty array if no unique strings are found', () => {
		const result = uniqueStrings('aabbcc');
		expect(result).toEqual([]);
	});
});
