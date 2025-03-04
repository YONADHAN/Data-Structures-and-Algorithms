class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size;
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
        this.size++;
    }

    print(){
        let str=''
        if(this.isEmpty()){
            console.log("This ll is empty")
        }else{
            let current = this.head;
            while(current){
                str+=`${current.value}=>`
                current = current.next;
            }
            str+="Null"
        }
        console.log(str)        
    }

    reverse(){
        if(this.isEmpty()){
            console.log("This ll is empty");
        }else {
            let prev = null;
            let curr = this.head
            while(curr){
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev
        }
    }
}


const list = new LinkedList();
for(let i = 0;i<10;i++){
    list.append(i)
}

list.print()
list.reverse();
list.print()