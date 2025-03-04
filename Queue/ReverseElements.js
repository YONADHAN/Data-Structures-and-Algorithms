class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element; // Fixed 'back' to 'rear'
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("This Queue is empty");
            return null;
        }

        let item = this.items[this.front];
        delete this.items[this.front];
        this.front++;

        if (this.isEmpty()) {
            this.items = {};
            this.front = 0;
            this.rear = 0;
        }

        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    getSize() {
        return this.rear - this.front;
    }

    reverseElements(k) {
        if (k > this.getSize() || k <= 0) {
            console.log("Invalid value of k");
            return this;
        }

        function reverse(queue, k) {
            if (k <= 0) return;
            let e = queue.dequeue();
            reverse(queue, k - 1);
            queue.enqueue(e);
        }

        reverse(this, k); // Call reverse function

        let balance = this.getSize() - k;
        for (let i = 0; i < balance; i++) {
            let e = this.dequeue();
            this.enqueue(e);
        }

        return this;
    }
}

// Driver Code
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.enqueue(90);
queue.enqueue(100);

let k = 5;
queue.reverseElements(k);

// Printing queue
while (!queue.isEmpty()) {
    console.log(queue.dequeue());
}
