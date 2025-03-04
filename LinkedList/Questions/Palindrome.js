class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length === 0
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            console.log("This ll is empty.");
            return;
        }else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    print(){
        let str=''
        if(this.isEmpty()){
            console.log("This ll is empty")
        }
        let current = this.head;
        while(current){
            str+=`${current.value}=>`
            current = current.next;
        }
        str
    }
}