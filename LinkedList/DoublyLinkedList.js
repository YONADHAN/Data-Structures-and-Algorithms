class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }


    prepend(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++;
    }

    printForward(){
        let current = this.head;
        let output = [];
        while(current) {
            output.push(current.value);
            current = current.next;
        }
        console.log("Forware:",output.join("<->"));
    }


    printBackward(){
        let current = this.tail;
        let output = [];
        while(current) {
            output.push(current.value);
            current = current.prev;
        }
        console.log("Backward:",output.join("<->"))
    }


    deleteFirst(value) {
        if(!this.head) return null;
        let current = this.head;
        while(current){
            if(current.value === value){
                if(current.prev) current.prev.next = current.next;
                if(current.next) current.next.prev = current.prev;
                if(current === this.head) this.head = current.next;
                if(current === this.tail) this.tail = current.prev;
                this.length--;
                return current.value;
            }
            
            current = current.next;
        }
        
    }

    deleteAll(value) {
        if(!this.head) return null;
        let current = this.head;
        while(current){
            if(current.value === value){
                if(current.prev) current.prev.next = current.next;
                if(current.next) current.next.prev = current.prev;
                if(current === this.head) this.head = current.next;
                if(current === this.tail) this.tail = current.prev;
                this.length--;
             
            }
            
            current = current.next;
        }
        
    }


}


const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.append(20);
dll.append(20);
dll.append(20);
dll.append(20);
dll.append(50);
dll.append(60);
dll.printForward();
dll.printBackward();

dll.delete(20);
dll.printForward(); 