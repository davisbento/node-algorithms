/*
You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum capacity.

Implement the DinnerPlates class:

DinnerPlates(int capacity) Initializes the object with the maximum capacity of the stacks capacity.
void push(int val) Pushes the given integer val into the leftmost stack with a size less than capacity.
int pop() Returns the value at the top of the rightmost non-empty stack and removes it from that stack, and returns -1 if all the stacks are empty.
int popAtStack(int index) Returns the value at the top of the stack with the given index index and removes it from that stack or returns -1 if the stack with that given index is empty.
*/

export class DinnerPlates {
	private capacity: number = 0;
	private stacks: number[][] = [];

	constructor(capacity: number) {
		this.capacity = capacity;
	}

	private getNextIndexAvailable(): number {
		const idx = this.stacks.findIndex((stack) => stack.length < this.capacity);
		return idx;
	}

	public push(val: number): void {
		const nextIndexAvailable = this.getNextIndexAvailable();
		if (nextIndexAvailable === -1) {
			this.stacks.push([val]);
			return;
		}
		this.stacks[nextIndexAvailable].push(val);
	}

	public pop(): number {
		if (this.stacks.length === 0) {
			return -1;
		}

		const lastStackIndex = this.stacks.length - 1;

		let numberRemoved = -1;

		for (let i = lastStackIndex; i >= 0; i--) {
			const currentStack = this.stacks[i];
			if (currentStack.length > 0) {
				const numberRemovedInside = currentStack.pop() || -1;
				numberRemoved = numberRemovedInside;
				break;
			}
		}

		return numberRemoved;
	}

	public popAtStack(index: number): number {
		const stackToRemove = this.stacks[index];

		if (stackToRemove === undefined) {
			return -1;
		}

		const numberRemoved = stackToRemove.pop() || -1;

		return numberRemoved;
	}

	public print(): void {
		console.log(this.stacks);
	}

	public getTotalStacks(): number {
		return this.stacks.length;
	}

	public getStacks() {
		return this.stacks;
	}
}
