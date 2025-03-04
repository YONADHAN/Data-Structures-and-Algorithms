class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this._hash(key);
        this.table[index] = undefined;
    }
}

// Example Usage
const ht = new HashTable(10);
ht.set("name", "Alice");
ht.set("age", 25);

console.log(ht.get("name")); // Output: Alice
console.log(ht.get("age"));  // Output: 25
