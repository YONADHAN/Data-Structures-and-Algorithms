class LoadFactor {
    constructor(size) {
      this.table = new Array(size)
      this.size = size
      this.count = 0
    }
  
    resize() {
      const oldTable = this.table
      this.size *= 2
      this.table = new Array(this.size)
      this.count = 0
  
      for (let bucket of oldTable) {
        if (bucket) {
          for (let [key, value] of bucket) {
            this.set(key, value)
          }
        }
      }
    }
  
    hash(key) {
      key = typeof (key) === 'string' ? key : key.toString()
      let total = 0
      for (let i = 0; i < key.length;i++) {
        total += key.charCodeAt(i)
      }
      return total % this.size
    }
  
    set(key, value) {
      if (this.count / this.size > 0.7) {
        this.resize()
      }
      let index = this.hash(key)
      let bucket = this.table[index]
      if (!bucket) {
        this.table[index] = [[key, value]]
        this.count++
      } else {
        let sameKeyItem = bucket.find(item => item[0] === key)
        if (sameKeyItem) {
          sameKeyItem[1] = value
          return
        } else {
          bucket.push([key, value])
          this.count++
        }
      }
    }
  
    get(key) {
      let index = this.hash(key)
      let bucket = this.table[index]
      if (bucket) {
        let sameKeyItem = bucket.find(item => item[0] === key)
        if (sameKeyItem) {
          return sameKeyItem[1]
        }
      }
      return "Invalid Key"
    }
  
    remove(key) {
      let index = this.hash(key)
      let bucket = this.table[index]
      if (bucket) {
        let sameKeyItem = bucket.findIndex(item => item[0] === key)
        if (sameKeyItem !== -1) {
          this.count--
          return bucket.splice(sameKeyItem, 1)
        }
      }
      return "not exists"
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i])
        }
      }
    }
  }
  
  
  const table = new LoadFactor(10);
  table.set(1, "sahal");
  table.set(2, "messi");
  table.set(3, "bruce");
  table.set(4, "cristiano");
  table.set(5, "tommy");
  table.set(6, "shelby");
  table.set(7, "cillian");
  table.set(8, "romero");
  
  console.log("Total Elements:", table.count);
  table.display();