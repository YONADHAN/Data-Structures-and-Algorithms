class HashTable {
    constructor(size = 10) {
      this.buckets = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let char of key) {
        hash += char.charCodeAt(0);
      }
      return hash % this.buckets.length;
    }
  
    set(key, value) {
      let index = this._hash(key);
      while (this.buckets[index]) {
        index = (index + 1) % this.buckets.length; // Linear probing
      }
      this.buckets[index] = [key, value];
    }
  
    get(key) {
      let index = this._hash(key);
      while (this.buckets[index]) {
        if (this.buckets[index][0] === key) return this.buckets[index][1];
        index = (index + 1) % this.buckets.length;
      }
      return undefined;
    }
  }
  
  let ht = new HashTable();
  ht.set("name", "Alice");
  ht.set("mane", "Bob"); // Collision handled by linear probing
  
  console.log(ht.get("name")); // Alice
  console.log(ht.get("mane")); // Bob
  
  