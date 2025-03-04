class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i = 0;i < key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                return bucket.push([key,value])
            }
        }
    }
    
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyIndex = bucket.findIndex(item => item[0] === key)
            if(sameKeyIndex !== -1){
                bucket.splice(sameKeyIndex,1)
            }
        }
    }

    display(){
        for(let i = 0;i < this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            } 
        }
    }
}



const table = new HashTable(50)

table.set("name","Joel")
table.set("age",19)
table.display()


console.log(table.get('name'))

// table.remove("name")
table.set("mane","John")
table.set("lane","diana")
table.remove("name")
table.display()