class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value); // Fix: Pass value to Node constructor
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    setSize() {
        let count = 0;
        let current = this.head;
        while (current) { // Fix: Iterate until current is null
            count++;
            current = current.next;
        }
        this.size = count;
    }

    print() {
        if (this.isEmpty()) {
            console.log("This linked list is empty");
            return;
        }

        let str = "";
        let current = this.head;
        while (current) { // Fix: Iterate until current is null
            str += `${current.value} => `;
            current = current.next;
        }
        str += "Null";
        console.log(str);
    }

    removeValueAt(index) {
        if (index < 0 || index >= this.size) { // Fix: Use this.size instead of this.getSize
            console.log("Invalid index");
            return;
        }

        if (index === 0) { // Fix: Handle head removal
            this.head = this.head.next;
        } else {
            let count = 0;
            let current = this.head;
            while (current.next && count < index - 1) {
                current = current.next;
                count++;
            }

            if (current.next) {
                current.next = current.next.next;
            }
        }

        this.size--;
    }
}

// Testing
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("Before Removal:");
list.print();

list.removeValueAt(3);

console.log("After Removing Index 2:");
list.print();
