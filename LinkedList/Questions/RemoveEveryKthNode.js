class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length===0
    }

    getSize(){
        return this.length;
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
        this.length++
    }

    print(){
        let str = '';
        if(this.isEmpty()){
            console.log("This ll is empty")
            return;
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

    removeKth(k){
        if(this.isEmpty()){
            console.log("This ll is empty");
        }else{
            let current = this.head;
            let scale = 1;
            let prev = null
            while(current){
                if(scale===k){
                   prev.next = current.next;
                   this.length--;
                   scale=0
                }
                scale++;
                prev = current
                current = current.next;
            }
        }
    }
}

const list = new LinkedList();
for(let i = 1;i<=10;i++){
    list.append(i)
}
list.print();
list.removeKth(2);
list.print();

// PS G:\Brototype\Week 16\Problems\LinkedList\Questions> node RemoveEveryKthNode.js
// 1=>2=>3=>4=>5=>6=>7=>8=>9=>10=>Null
// 1=>3=>5=>7=>9=>Null