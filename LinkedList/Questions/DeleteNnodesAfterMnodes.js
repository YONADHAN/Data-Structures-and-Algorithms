class Node {
    constructor(value){
        this.next = null
        this.value = value
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

    getSize(){
        return this.size;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else {
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
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
                str+=`${curr.value} => `
                curr = curr.next;
            }
            str+='Null'
        }
        console.log(str)
    }

    M_N_deletion(m,n){
        let current = this.head;
        for(let i = 1;i<n && current!==null;i++){
            current = current.next;
        }
        if(current === null){
            console.log("Position N is out of bounds.");
            return
        }
        let mth = current;
        for(let i = 0;i<m && current!==null;i++){
            current = current.next;
        }

        if(current == null){
            console.log("M is out of bound");
            return
        }
        
        let nth = current;
        mth.next = nth.next
        
    }


}


// Example Usage
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
ll.append(7);
ll.append(8);
ll.append(9);

console.log("Before deletion:");
ll.print();

ll.M_N_deletion(2, 3); // Deletes 2 nodes after the 3rd node

console.log("After deletion:");
ll.print();


// Before deletion:
// 1 => 2 => 3 => 4 => 5 => 6 => 7 => 8 => 9 => Null
// After deletion:
// 1 => 2 => 3 => 6 => 7 => 8 => 9 => Null