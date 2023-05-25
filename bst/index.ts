/* Binary Search Tree */

class TreeNode {
	public data: number;
	public left: TreeNode | null;
	public right: TreeNode | null;

	constructor(data: number) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	public root: TreeNode | null;

	constructor(head?: TreeNode | null) {
		this.root = head || null;
	}

	public insert(node: TreeNode | null = this.root, value: number): TreeNode {
		if (!node) {
			const root = new TreeNode(value);
			return root;
		}

		// IN A BST, THE LEFT NODE IS ALWAYS LESS THAN THE PARENT NODE
		// AND THE RIGHT NODE IS ALWAYS GREATER THAN THE PARENT NODE

		if (value < node.data) {
			node.left = this.insert(node.left, value);
		}

		if (value > node.data) {
			node.right = this.insert(node.right, value);
		}

		return node;
	}

	public isValidBST(root: TreeNode | null): boolean {
		const stack: TreeNode[] = [];
		let prev: TreeNode | null = null;
		let current: TreeNode | null = root;

		while (current !== null || stack.length > 0) {
			while (current !== null) {
				stack.push(current);
				current = current.left;
			}

			current = stack.pop()!;

			// Check if current node violates BST property
			if (prev !== null && current.data <= prev.data) {
				return false;
			}

			prev = current;
			current = current.right;
		}

		return true;
	}

	public search(node: TreeNode | null = this.root, value: number): TreeNode | null {
		let temp = node;
		if (temp === null) {
			return null;
		}

		if (temp.data === value) {
			return temp;
		}

		// if the value we are searching for is less than the current node's value
		// then we search the left subtree
		if (value < temp.data) {
			return this.search(temp.left, value);
		}

		// if the value we are searching for is greater than the current node's value
		// then we search the right subtree
		if (value > temp.data) {
			return this.search(temp.right, value);
		}

		return null;
	}

	public inorderTraversal(node: TreeNode | null = this.root): void {
		let temp = node;
		if (temp) {
			this.inorderTraversal(temp.left);
			console.log(temp.data);
			this.inorderTraversal(temp.right);
		}
	}

	public preorderTraversal(node: TreeNode | null = this.root): void {
		let temp = node;
		if (temp) {
			console.log(temp.data);
			this.preorderTraversal(temp.left);
			this.preorderTraversal(temp.right);
		}
	}

	public postorderTraversal(node: TreeNode | null = this.root): void {
		let temp = node;
		if (temp) {
			this.postorderTraversal(temp.left);
			this.postorderTraversal(temp.right);
			console.log(temp.data);
		}
	}
}

const rootNode = new TreeNode(50);
rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);

const bst = new BinarySearchTree(rootNode);
bst.insert(bst.root, 30);
bst.insert(bst.root, 31);
bst.insert(bst.root, 20);
bst.insert(bst.root, 40);
bst.insert(bst.root, 70);
bst.insert(bst.root, 60);
bst.insert(bst.root, 80);

// console.log(JSON.stringify(bst, null, 2));
// // bst.postorderTraversal();

// console.log(bst.search(bst.root, 70));
console.log(bst.isValidBST(bst.root));
