class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;

        // Reset front and rear when queue becomes empty
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
            this.items = {}; // Clear memory
        }
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items);
    }
}
