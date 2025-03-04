class HashTable {
    constructor(size = 10) {
      this.buckets = new Array(size);
    }
  
    _hash1(key) {
      let hash = 0;
      for (let char of key) {
        hash += char.charCodeAt(0);
      }
      return hash % this.buckets.length;
    }
  
    _hash2(key) {
      return 7 - (key.length % 7); // Secondary hash function
    }
  
    set(key, value) {
      let index = this._hash1(key);
      let stepSize = this._hash2(key);
      
      while (this.buckets[index]) {
        index = (index + stepSize) % this.buckets.length;
      }
      this.buckets[index] = [key, value];
    }
  
    get(key) {
      let index = this._hash1(key);
      let stepSize = this._hash2(key);
  
      while (this.buckets[index]) {
        if (this.buckets[index][0] === key) return this.buckets[index][1];
        index = (index + stepSize) % this.buckets.length;
      }
      return undefined;
    }
  }
  
  let ht = new HashTable();
  ht.set("name", "Alice");
  ht.set("mane", "Bob"); // Collision handled by double hashing
  
  console.log(ht.get("name")); // Alice
  console.log(ht.get("mane")); // Bob
  