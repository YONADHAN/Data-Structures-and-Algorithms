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

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }


    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }

    print(){
        let str = ""
        if(this.isEmpty()){
            console.log("This ll is already empty")
        }else{
            let current = this.head;
            while(current){
                str+=`${current.value}=>`
                current = current.next;
            }
            str+='Null'
        }
        console.log(str);        
    }

    middle(){
        if(this.isEmpty()){
            console.log("This ll is already empty");
        }else {
            let fast = this.head;
            let slow = this.head;
            while(fast && fast.next){
                slow = slow.next;
                fast = fast.next.next;
            }
            console.log(slow.value)
            return slow.value;
        }
    }
}



const newll = new LinkedList();

for(let i =0;i<12;i++){
    newll.append(i);
}

newll.print()
newll.middle()