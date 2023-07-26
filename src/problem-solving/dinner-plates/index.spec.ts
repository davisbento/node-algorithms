import { DinnerPlates } from '.';

describe('dinner-plates', () => {
	test('should initialize the DinnerPlates with empty stack', () => {
		const dinnerPlates = new DinnerPlates(2);
		expect(dinnerPlates.getTotalStacks()).toEqual(0);
	});

	test('should push a value into the stack', () => {
		const dinnerPlates = new DinnerPlates(2);
		dinnerPlates.push(1);
		dinnerPlates.push(2);
		dinnerPlates.push(3);
		dinnerPlates.push(4);
		dinnerPlates.push(5);
		dinnerPlates.push(6);
		dinnerPlates.push(7);

		expect(dinnerPlates.getTotalStacks()).toEqual(4);
		expect(dinnerPlates.getStacks()[0]).toEqual([1, 2]);
		expect(dinnerPlates.getStacks()[1]).toEqual([3, 4]);
		expect(dinnerPlates.getStacks()[2]).toEqual([5, 6]);
		expect(dinnerPlates.getStacks()[3]).toEqual([7]);
	});

	test('should pop a value from the stack', () => {
		const dinnerPlates = new DinnerPlates(2);
		dinnerPlates.push(1);
		dinnerPlates.push(2);
		dinnerPlates.push(3);
		dinnerPlates.push(4);
		dinnerPlates.push(5);
		dinnerPlates.push(6);
		dinnerPlates.push(7);

		const numberRemoved1 = dinnerPlates.pop();
		const numberRemoved2 = dinnerPlates.pop();

		dinnerPlates.print();

		expect(numberRemoved1).toEqual(7);
		expect(numberRemoved2).toEqual(6);
	});

	test('should popstack a value from the stack', () => {
		const dinnerPlates = new DinnerPlates(2);
		dinnerPlates.push(1);
		dinnerPlates.push(2);
		dinnerPlates.push(3);
		dinnerPlates.push(4);
		dinnerPlates.push(5);

		// now the stacks should look like this:
		// [1, 2]
		// [3, 4]
		// [5]
		expect(dinnerPlates.getStacks()[0]).toEqual([1, 2]);
		expect(dinnerPlates.getStacks()[1]).toEqual([3, 4]);
		expect(dinnerPlates.getStacks()[2]).toEqual([5]);

		expect(dinnerPlates.popAtStack(0)).toEqual(2);

		// 20 should be pushed into the first stack because it has space in the leftmost available index
		dinnerPlates.push(20);
		expect(dinnerPlates.getStacks()[0]).toEqual([1, 20]);

		// 21 should be pushed into the third stack because it has space in the leftmost available index
		dinnerPlates.push(21);
		expect(dinnerPlates.getStacks()[2]).toEqual([5, 21]);

		// now the stacks should look like this:
		// [1, 20]
		// [3, 4]
		// [5, 21]

		expect(dinnerPlates.popAtStack(0)).toEqual(20);
		expect(dinnerPlates.popAtStack(2)).toEqual(21);
		expect(dinnerPlates.pop()).toEqual(5);
		expect(dinnerPlates.pop()).toEqual(4);
		expect(dinnerPlates.pop()).toEqual(3);
		expect(dinnerPlates.pop()).toEqual(1);
		// empty stack
		expect(dinnerPlates.pop()).toEqual(-1);
		// empty stack
		expect(dinnerPlates.pop()).toEqual(-1);
	});
});
