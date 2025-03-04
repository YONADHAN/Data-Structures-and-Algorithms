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
        this.size++
    }

    print(){
        let str = '';
        if(this.isEmpty()){
            console.log("This is empty")
            return;
        }else {
            let current = this.head;
            while(current){
                str+=`${current.value}=>`
                current = current.next;
            }
            str+='Null'
        }
        console.log(str)
    }

   createLoop(index){
        if(this.isEmpty()){
            console.log("This ll is empty");
        }else {
            let count = 0
            let current = this.head;
            let junction = null
            while(current.next){
                if(count === index){
                    junction = current;
                }
                count++;
                current = current.next;
            }
            if(junction){
                current.next = junction;
                console.log(`Loop is created at ${index}`);
            }else {
                console.log("Loop is not created")
            }
        }
   }

   detectLoop(){
       if(this.isEmpty()){
        console.log("Empty");
       }else {
         let fast = this.head;
         let slow = this.head;
       
         while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
            if(fast === slow){
                console.log(`Loop is found`);
                return true
            }
         }
         console.log('loop is not existing')
         return false
       }
   }


}

// Testing
const ll = new LinkedList();
for (let i = 0; i < 10; i++) {
    ll.append(i);
}

ll.print();
ll.createLoop(3);  // Creates a loop at index 3
ll.detectLoop();



// PS G:\Brototype\Week 16\Problems\LinkedList\Questions> node DetectLoop.js
// 0=>1=>2=>3=>4=>5=>6=>7=>8=>9=>Null
// Loop is created at 3
// Loop is found