class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
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
            current.next =  node;
        }
        this.size++;
    }

    print(){
        let str = '';
        if(this.isEmpty()){
            console.log("empty ll");
            return;
        }else {
            let current = this.head;
            while(current){
                str+=`${current.value} =:> `
                current = current.next;
            }
            str+="Null"
        }
        console.log(str)
    }

    getSize(){
        return this.size;
    }

    pairSwap(){
        if(this.getSize()<2){
            console.log("Not possible to do this");
            return;
        }
        let first = this.head;
        let second = this.head.next;
        while(second.next){
            let temp = first.value
            first.value = second.value
            second.value = temp
            first = first.next.next;
            second = second.next.next;
        }

    }
}


let list = new LinkedList();

for(let i = 0;i<10;i++){
    list.append(i);
};

list.print();

list.pairSwap();

list.print();


// PS G:\Brototype\Week 16\Problems\LinkedList\Questions> node PairwiseSwap.js
// 0 =:> 1 =:> 2 =:> 3 =:> 4 =:> 5 =:> 6 =:> 7 =:> 8 =:> 9 =:> Null
// 1 =:> 0 =:> 3 =:> 2 =:> 5 =:> 4 =:> 7 =:> 6 =:> 8 =:> 9 =:> Null
// PS G:\Brototype\Week 16\Problems\LinkedList\Questions> 