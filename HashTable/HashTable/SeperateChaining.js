class HashTable {
    constructor(size = 10) {
      this.buckets = new Array(size).fill(null).map(() => []);
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
      let bucket = this.buckets[index];
  
      for (let pair of bucket) {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      }
      bucket.push([key, value]);
    }
  
    get(key) {
      let index = this._hash(key);
      for (let pair of this.buckets[index]) {
        if (pair[0] === key) return pair[1];
      }
      return undefined;
    }
  }
  
  let ht = new HashTable();
  ht.set("name", "Alice");
  ht.set("age", 30);
  ht.set("mane", "Bob"); // Collision (same index as "name")
  
  console.log(ht.get("name")); // Alice
  console.log(ht.get("mane")); // Bob
  