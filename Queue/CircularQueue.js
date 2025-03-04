class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    // Check if queue is empty
    isEmpty() {
        return this.front === -1;
    }

    // Check if queue is full
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    // Enqueue (Insert an element)
    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is Full!");
            return;
        }
        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.size;
        }
        this.queue[this.rear] = value;
        console.log(`Enqueued: ${value}`);
    }

    // Dequeue (Remove an element)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
            return;
        }
        let removedValue = this.queue[this.front];
        if (this.front === this.rear) {
            // Only one element was present
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        console.log(`Dequeued: ${removedValue}`);
        return removedValue;
    }

    // Peek (Get Front Element)
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
            return null;
        }
        return this.queue[this.front];
    }

    // Display Queue
    display() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
            return;
        }
        let i = this.front;
        let result = [];
        while (true) {
            result.push(this.queue[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log("Queue:", result.join(" "));
    }
}

// Usage Example
const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.enqueue(60); // Should indicate queue is full
cq.display(); // Should print queue
cq.dequeue();
cq.dequeue();
cq.display();
cq.enqueue(60);
cq.display();
