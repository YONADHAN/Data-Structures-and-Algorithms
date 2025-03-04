class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor(){
        this.front= this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if(!this.rear) {
            this.front = this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if(!this.front) return "Queue is empty";
        let value = this.front.value;
        this.front = this.front.next;
        if(!this.front) this.rear = null;
        this.size--;
        return value;
    }

    peek(){
        return this.front?this.front.value:"Queue is empty"
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
}

const queue =  new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.peek()); // 20
console.log(queue.getSize()); // 2