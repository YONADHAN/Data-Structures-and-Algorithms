class Node{
    constructor(value){
        this.next = null
        this.value = value
    }
}


class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    }


    isEmpty(){
        return this.size === 0;
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
        let str = ''
        if(this.isEmpty()){
            console.log("This ll is empty");
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



    removeDuplicates(){
        if(this.isEmpty()){
            console.log("This ll is empty");
        }else {
            let current = this.head;
            let prev = null
            while(current){
                if( prev!==null && prev.value === current.value){
                    prev.next = current.next;
                } else {
                    prev = current
                }             
                current = current.next
            }
        }
    }
}


const list = new LinkedList();

for(let i = 0;i<10;i++){
    list.append(i)
    if(i==0){
        for(let k = 0;k<4;k++){
            list.append(0)
        }
    }
}

list.print()
list.removeDuplicates()
list.print()


// PS G:\Brototype\Week 16\Problems\LinkedList\Questions> node RemoveDuplicatesFromSortedLL.js
// 0=>0=>0=>0=>0=>1=>2=>3=>4=>5=>6=>7=>8=>9=>Null
// 0=>1=>2=>3=>4=>5=>6=>7=>8=>9=>Null