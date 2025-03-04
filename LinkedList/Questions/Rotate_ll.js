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
        return this.length === 0;
    }

    getSize(){
        return this.length;
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    print(){
        let str = ''
        if(this.isEmpty()){
            console.log("This linked list is empty")
            return;
        }else {
            let current = this.head;
            while(current){
                str+=`${current.value}=>`
                current = current.next
            }
            str+='Null'
        }
        console.log(str)
    }

//also works
    // pairSwap(){
    //     if(this.getSize()<2){
    //         console.log("Not possible to do this");
    //         return;
    //     }
    //     let first = this.head;
    //     let second = this.head.next;
    //     while(second ){
    //         let temp = first.value
    //         first.value = second.value
    //         second.value = temp
    //         first = first.next;
    //         second = second.next;
    //     }
    // }








    rotate(){
        if(this.isEmpty()){
            console.log("This is empty, so can't rotate an empyt ll")
        }else if(this.getSize === 1){
            this.print()
        }else{
            let current = this.head;
            while(current.next.next){//stopping in second last node to make the next of second last as null and to save last node to last variable
                current = current.next;
            }
            let last = current.next;
            current.next = null;
            last.next = this.head;
            this.head = last;       
        }
    }
}


const ll = new LinkedList();
for(let i = 0;i<10;i++){
    ll.append(i);
}


ll.print()
ll.rotate()
ll.print()
ll.rotate()
ll.print()
ll.rotate()
ll.print()
ll.rotate()
ll.print()
ll.rotate()
ll.print()
ll.rotate()
ll.print()