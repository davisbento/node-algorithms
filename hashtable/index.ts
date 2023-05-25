class HashTable {
	private table: Array<{ key: string; value: string }> = new Array(37);

	private hash(key: string): number {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	}

	public put(key: string, value: string): void {
		const position = this.hash(key);
		this.table[position] = { key, value };
	}

	public get(key: string) {
		return this.table[this.hash(key)];
	}

	public getAll() {
		return this.table;
	}
}

const hashTable = new HashTable();
hashTable.put('name', 'John');
hashTable.put('age', '18');
console.log(hashTable.get('name')); // John
console.log(hashTable.getAll()); // [ { key: 'name', value: 'John' }, { key: 'age', value: '18' } ]
