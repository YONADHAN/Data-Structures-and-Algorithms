class QueueUsingStacks {
    constructor() {
        this.s1 = []; // Main stack for enqueue
        this.s2 = []; // Temporary stack for reversing order
    }

    // Enqueue operation (O(1))
    Enqueue(value) {
        this.s1.push(value);
    }

    // Dequeue operation (O(n) worst case, O(1) amortized)
    Dequeue() {
        if (this.s2.length === 0) { 
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop()); // Move s1 to s2 to maintain order
            }
        }
        return this.s2.pop(); // Remove front element (FIFO)
    }

    // Peek front element (O(1) amortized)
    Front() {
        if (this.s2.length === 0) { 
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2[this.s2.length - 1]; // Get front element
    }
}

// ✅ Example Usage:
let queue = new QueueUsingStacks();
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);

console.log(queue.Dequeue()); // Output: 1 (FIFO behavior)
console.log(queue.Dequeue()); // Output: 2
console.log(queue.Dequeue()); // Output: 3
