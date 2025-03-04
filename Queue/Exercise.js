// class Queue {
//     constructor(){
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(element){
//         this.items[this.rear] = element;
//         this.rear++;
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("This Queue is empty");
//             return null
//         }

//         let item = this.items[this.front];
//         delete this.items[this.front];
//         this.front++;

//         if(this.isEmpty()){
//             this.items = {};
//             this.front = 0;
//             this.rear = 0;
//         }
//         return item;
//     }

//     isEmpty(){
//         return this.rear - this.front === 0;
//     }

//     getSize(){
//         return this.rear - this.front;
//     }


//     reverseElement(k){

//         function reverse(queue, k){
//             if(k<=0)return 
//             let e = queue.dequeue();
//             reverse(queue, k-1);
//             queue.enqueue(e);
//         }

//         reverse(this, k);
//         let balance = this.getSize() - k;
//         for(let i = 0;i < balance; i++){
//            let e =  queue.dequeue()
//            queue.enqueue(e)
//         }
//         return this

//     }
// }


// let k = 5;
// let queue = new Queue();

// for(let i = 10;i<110;i+=10){
//     queue.enqueue(i)
// }
// queue.reverseElement(k);

// while(!queue.isEmpty()){
//     console.log(queue.dequeue())
// }






class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty())return null
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length;
    }

    reverseElements(k){
        function reverse(queue , k){
            if(k<=0)return
            let e = queue.dequeue();
            reverse(queue, k-1);
            queue.enqueue(e);
        }

        reverse(this, k);
        let balance = this.getSize() - k

        for(let i = 0; i< balance; i++){
            let e = this.dequeue();
            this.enqueue(e);
        }

        return this
    }

}




let queue = new Queue();

let k = 5;
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.enqueue(90);
queue.enqueue(100);
queue.reverseElements(k);

// Printing queue
while (!queue.isEmpty()) {
    console.log(queue.dequeue());
}
