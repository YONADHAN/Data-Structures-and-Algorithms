class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length === 0
    }

    getLength(){
        return this.length
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            
        }
        this.length++;
    }

    reverse(){
        if(this.isEmpty()){
            console.log("This Linked list is empty")
        }else{
            let firsthead = this.head
            let previous = null;
            let current = this.head;
            while(current){
                let next = current.next;
                current.next = previous;
                current.prev = next;
                previous = current;
                current = next;
            }
            this.head = previous
            this.tail = firsthead
        }
    }

    printForward(){
        let str = 'Null<=>'
        if(this.isEmpty()){
            console.log("This is empty")
        }

        let current = this.head;
        while(current){
            str+=`${current.value}<=>`
            current = current.next
        }
        str+='Null'
        console.log(str)
    }
}

const list = new DLL();
for(let i = 0;i<10;i++){
    list.append(i);
}

list.printForward()
list.reverse()
list.printForward()