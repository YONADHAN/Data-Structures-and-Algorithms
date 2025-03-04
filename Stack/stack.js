//Array implementation of stack

// class Stack {
//     constructor(){
//         this.items = []
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop(){
//         if (this.isEmpty()){
//             return "Stack is Empty";
//         }
//         return this.items.pop();
//     }


//     peek() {
//         if (this.isEmpty()){
//             return  "Stack is empty";
//         }
//         return this.items[this.items.length - 1]
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     size() {
//         return this.items.length;
//     }

//     print(){
//         console.log(this.items);
//     }
// }


// const stack = new Stack();

// stack.push(10);
// stack.push(20); 
// stack.push(30);

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.print();



//Linked list implementation of stack

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }


    pop() {
        if(this.isEmpty()){
            console.log("Stack is empty!");
            return null;
        }

        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }


    peek() {
        return this.isEmpty()? null : this.top.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }


    printStack() {
        let current = this.top;
        let stackValues = [];
        while (current) {
            stackValues.push(current.value);
            current = current.next;
        }
        console.log("Stack:",stackValues.join("-> "));
    }

    
}


// Example Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
console.log("Top Element:", stack.peek()); 
console.log("Popped Element:", stack.pop()); 
stack.printStack(); 