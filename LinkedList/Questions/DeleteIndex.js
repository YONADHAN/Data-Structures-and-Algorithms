class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    append(value){
        const node = new Node(value);
        if(this.size===0){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    delete(position){
        if(this.size){
            console.log("empty list");
            return 
        }else{


            let prev = null;
            let curr = this.head;
            let index = 0;
            while(curr){
                if(index===position){
                    if(position===0){
                        this.head = this.head.next;
                    }else{
                        prev.next = curr.next;
                    }
                }

                index++;
                prev = curr;
                curr = curr.next;
            }
        }
    }





}