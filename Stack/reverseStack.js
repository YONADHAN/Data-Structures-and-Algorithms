class Stack {
    constructor(){
        this.stack = [];
        this.top = -1;
    }

    push(data) {
        this.stack.push(data);
    }
    
    isEmpty(){
        return this.stack.length === 0
    }

    pop(){
        if(this.isEmpty())return null
        return this.stack.pop();
    }

    reverse(str){
        let splitted = str.split("");
        for(let i = 0;i<splitted.length;i++){
            this.stack.push(splitted[i]);
        }

        let reversedString = "";
        while(this.stack.length>0){
            reversedString+=this.pop();
        }
        return reversedString;
    }
}

const newstack = new Stack();
const str = "Yonadhan";
console.log(newstack.reverse(str));