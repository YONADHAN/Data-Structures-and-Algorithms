class Stack {
    constructor() {
      this.stack = [];
      this.top = -1;
    }
    push(data) {
      this.stack.push(data);
    }
    pop() {
      return this.stack.pop();
    }
    sortwithstack() {
      let tempstack = [];
      let input = this.stack;
      while (input.length > 0) {
        let tmp = input.pop();
        while (tempstack.length > 0 && tempstack[tempstack.length - 1] < tmp) {
          input.push(tempstack[tempstack.length - 1]);
          tempstack.pop();
        }
        tempstack.push(tmp);
      }
      
      return tempstack;
    }
  }
  
  const stack = new Stack(10);
  stack.push(5);
  stack.push(1);
  stack.push(4);
  stack.push(2);
  stack.push(3);
  console.log(stack.sortwithstack());
  console.log(stack);