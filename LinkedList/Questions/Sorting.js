class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
    }


    isEmpty(){
        return this.size === 0;
    }


    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else {
            let current = this.head;
            while(current.next){

                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }


    print(){
        let str = '';
        if(this.isEmpty()){
            console.log("ll is empty.");
            return;
        }else{
            let current = this.head;
            while(current){
                str+=`${current.value}=>`
                current = current.next;
                
            }
            str+='Null'
        }
        console.log(str)
    }

    sorting(){
        
        for(let i = this.head;i.next!==null;i=i.next){
            for(let j = i.next;j!==null;j=j.next){
                if(i.value>j.value){
                    let temp = j.value;
                    j.value = i.value;
                    i.value = temp;
                }
            }
        }
    }
}



let list = new LinkedList();
for(let i =0;i<5;i++){
    list.append(i)
}
for(let i =5;i>=0;i--){
    list.append(i)
}

list.print()
list.sorting();
list.print()


// PS G:\Brototype\Week 16\Problems\LinkedList\Questions> node Sorting.js
// 0=>1=>2=>3=>4=>5=>4=>3=>2=>1=>0=>Null
// 0=>0=>1=>1=>2=>2=>3=>3=>4=>4=>5=>Null