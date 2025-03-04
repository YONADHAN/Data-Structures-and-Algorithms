class Node {
    constructor(data){
        this.val = data;
        this.next = null;
    }
}


class Stack {
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(data){
        const node = new Node(data);
        if(this.top ===null){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
            
        }
        this.size++;
    }

    pop(){
        if(this.size === 0)return null;
        let e = this.top.val;
        this.top = this.top.next;
        this.size--;
        return e;
    }
}

const myStack = new Stack();
myStack.push("apple");