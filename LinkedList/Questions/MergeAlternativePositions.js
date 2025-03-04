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

    getSize() {
        return this.size;
    }

    append(value) {
        const node = new Node(value);
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

    print() {
        let str = "";
        if (this.isEmpty()) {
            console.log("This linked list is empty");
            return;
        } else {
            let current = this.head;
            while (current) {
                str += `${current.value} => `;
                current = current.next;
            }
            str += "Null";
        }
        console.log(str);
    }
}

function Merge(list1, list2) {
    let merge = new LinkedList();

    let curr1 = list1.head;
    let curr2 = list2.head;

    while (curr1 !== null && curr2 !== null) {
        merge.append(curr1.value);
        curr1 = curr1.next;

        merge.append(curr2.value);
        curr2 = curr2.next;
    }

    // Append remaining nodes from list1
    while (curr1 !== null) {
        merge.append(curr1.value);
        curr1 = curr1.next;
    }

    // Append remaining nodes from list2
    while (curr2 !== null) {
        merge.append(curr2.value);
        curr2 = curr2.next;
    }

    merge.print();
}

// Example Usage
let list1 = new LinkedList();
let list2 = new LinkedList();

for (let i = 1; i <= 10; i++) {
    list1.append(i);
}

for (let i = 11; i <= 20; i++) {
    list2.append(i);
}

console.log("List 1:");
list1.print();
console.log("List 2:");
list2.print();

console.log("Merged List:");
Merge(list1, list2);


// List 1:
// 1 => 2 => 3 => 4 => 5 => 6 => 7 => 8 => 9 => 10 => Null
// List 2:
// 11 => 12 => 13 => 14 => 15 => 16 => 17 => 18 => 19 => 20 => Null
// Merged List:
// 1 => 11 => 2 => 12 => 3 => 13 => 4 => 14 => 5 => 15 => 6 => 16 => 7 => 17 => 8 => 18 => 9 => 19 => 10 => 20 => Null