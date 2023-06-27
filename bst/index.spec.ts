import { BinarySearchTree, TreeNode } from '.';

describe('BST', () => {
	test('should instance a new tree node without left/right nodes', () => {
		const rootNode = new TreeNode(1);
		expect(rootNode.data).toBe(1);
		expect(rootNode.left).toBeNull();
		expect(rootNode.right).toBeNull();
	});

	test('should instance a new tree without an explicit root node', () => {
		const bst = new BinarySearchTree();
		bst.insert(bst.root, 1);
		expect(bst.root!.data).toBe(1);
	});

	test('should instance a new tree node with left/right nodes', () => {
		const rootNode = new TreeNode(1);
		rootNode.left = new TreeNode(2);
		rootNode.right = new TreeNode(3);

		expect(rootNode.data).toBe(1);
		expect(rootNode.left.data).toBe(2);
		expect(rootNode.right.data).toBe(3);
	});

	test('should instance a bst with a tree node', () => {
		const rootNode = new TreeNode(1);
		const bst = new BinarySearchTree(rootNode);
		expect(bst.root!.data).toBe(1);
	});

	test('should instance a bst with a tree node and left/right nodes', () => {
		const rootNode = new TreeNode(10);
		const bst = new BinarySearchTree(rootNode);
		// should insert in the left node as it is less than the root node
		bst.insert(bst.root, 9);
		// should insert in the right node as it is greater than the root node
		bst.insert(bst.root, 11);

		expect(bst.root!.data).toBe(10);
		expect(bst.root!.left!.data).toBe(9);
		expect(bst.root!.right!.data).toBe(11);
	});

	test('should search for a node in the bst', () => {
		const rootNode = new TreeNode(10);
		const bst = new BinarySearchTree(rootNode);
		bst.insert(bst.root, 9);
		bst.insert(bst.root, 11);
		bst.insert(bst.root, 8);
		bst.insert(bst.root, 12);

		expect(bst.search(bst.root, 10)).not.toBeNull();
		expect(bst.search(bst.root, 9)).not.toBeNull();
		expect(bst.search(bst.root, 11)).not.toBeNull();
		expect(bst.search(bst.root, 8)).not.toBeNull();
		expect(bst.search(bst.root, 12)).not.toBeNull();
	});

	test('should traverse the bst in order', () => {
		const rootNode = new TreeNode(10);
		const bst = new BinarySearchTree(rootNode);
		bst.insert(bst.root, 9);
		bst.insert(bst.root, 11);
		bst.insert(bst.root, 8);
		bst.insert(bst.root, 12);

		expect(bst.inorderTraversalReturnString(bst.root)).toBe('8 9 10 11 12 ');
	});

	test('should traverse the bst in pre order', () => {
		const rootNode = new TreeNode(10);
		const bst = new BinarySearchTree(rootNode);

		bst.insert(bst.root, 9);
		bst.insert(bst.root, 11);
		bst.insert(bst.root, 8);
		bst.insert(bst.root, 12);

		expect(bst.preorderTraversalReturnString(bst.root)).toBe('10 9 8 11 12 ');
	});
});
