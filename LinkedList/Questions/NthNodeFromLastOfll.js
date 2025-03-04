class Node {
    constructor(value){
        this.next = null;
        this.value = value;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length === 0;
    }

    getSize(){
        return this.length;
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    print(){
        let str = '';
        if(this.isEmpty()){
            console.log("This ll is empty.")
        }else {
            let current = this.head;
            while(current){
                str+=`${current.value}=>`
                current = current.next;
            }
            str+='Null'
        }
        console.log(str)
    }

    nthNode(n){
        if(this.isEmpty()){
            console.log("This doen't contain any element.")
            return;
        }else {
            let index = this.getSize()-n;
            let current = this.head;
            for(let i = 0;i<index;i++){
                current = current.next;
            }
            return current.value;
        }
    }

}


let list = new LinkedList();

for(let i = 0;i < 10;i++){
    list.append(i);
}

list.print();
console.log(list.nthNode(7))