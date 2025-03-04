class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    append(value){
        const node = new Node(value)
       
            if(this.isEmpty()){
                this.head = node;
            } else {
                let curr = this.head;
                while(curr.next){
                    curr = curr.next;
                }
                curr.next = node
            }
            this.size++;
        
    }

    print(){
        let str = ''
        if(this.isEmpty()){
            console.log("This ll is empty")
        }else {
            let curr = this.head;
            while(curr){
                str+=`${curr.value}=>`
                curr = curr.next
            }
            str+="Null"
        }
        console.log(str)
    }

    deleteMiddle(){
        let slow = this.head;
        let fast = this.head;

        let prev = null;
       
        while(fast && fast.next){
            prev = slow
            slow = slow.next;
            fast = fast.next.next;
        }

        console.log(`${slow.value} is the middle element that is going to get deleted`)

        prev.next = slow.next;

    }
}



const list = new LinkedList();

for(let i = 0;i<10;i++){
    list.append(i);
}

list.print();
list.deleteMiddle();
list.print()