class Node {
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

    append(value){
        const node = new Node(value);
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
        let str = ''
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


    delete(value){
        if(this.isEmpty()){
            console.log("This ll is empty");
            return
        }else {
            let nodebeforelastoccuranceNode = null
            let lastoccurancenNode = null

            let prev = null;
            let current = this.head;
            while(current){
                if(current.value === value) {
                    nodebeforelastoccuranceNode = prev;
                    lastoccurancenNode = current;
                }
                prev = current;
                current = current.next;
            }           
            nodebeforelastoccuranceNode.next = lastoccurancenNode.next;
        }
    }
}


const list = new LinkedList();

for(let i = 0;i<10;i++){
    list.append(i);
}

list.print()
list.append(2)
list.append(4);
list.append(0);
list.print()
list.delete(0);
list.print()


// 0=>1=>2=>3=>4=>5=>6=>7=>8=>9=>Null
// 5 is the middle element that is going to get deleted
// 0=>1=>2=>3=>4=>6=>7=>8=>9=>Null