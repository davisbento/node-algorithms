class ListNode {
	data: number;
	next: ListNode | null;
	constructor(data: number) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	#head: ListNode | null;

	constructor() {
		this.#head = null;
	}

	// add a new node to the end of the list
	public addNode(data: number) {
		const newNode = new ListNode(data);

		if (!this.#head) {
			this.#head = newNode;
		} else {
			let current = this.#head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	// print the list
	public printList() {
		let current = this.#head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	public deleteNodeByIndex(index: number) {
		let current = this.#head;
		let prev = null;
		let i = 0;

		if (index === 0) {
			this.#head = current!.next;
			return;
		}

		while (i < index && current!.next) {
			prev = current;
			current = current!.next;
			i++;
		}

		if (i === index) {
			prev!.next = current!.next;
		}
	}
}

// create a new linked list
const list = new LinkedList();

// add nodes to the list
list.addNode(1);
list.addNode(2);
list.addNode(3);

// print the list
list.printList(); // outputs: 1, 2, 3

// delete the node at index 2
console.log('Deleting node at index 2');
list.deleteNodeByIndex(2);

list.printList(); // outputs: 1, 2
