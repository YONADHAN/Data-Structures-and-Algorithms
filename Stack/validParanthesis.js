class Stack {
    constructor() {
        this.stack = [];
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.pop();
    }

    push(data) {
        this.stack.push(data);
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    validateParanthesis(paranthesis) {
        let obj = {
            "{": "}",
            "[": "]",
            "(": ")",
            "<": ">"
        };

        for (let para of paranthesis) {
            // If it's an opening parenthesis, push it onto the stack
            if (Object.keys(obj).includes(para)) {
                this.push(para);
            } else {
                // If it's a closing parenthesis, check if it matches the top of the stack
                let top = this.pop();
                if (obj[top] !== para) {
                    return false; // Mismatch found
                }
            }
        }

        // If the stack is empty at the end, all parentheses are matched correctly
        return this.isEmpty();
    }
}

// Testing the class
const stack = new Stack();
console.log(stack.validateParanthesis("({[<>]})"));  // true
console.log(stack.validateParanthesis("{[<(>)>}"));  // true
console.log(stack.validateParanthesis("{[(<])>}"));  // false
console.log(stack.validateParanthesis("{[(>)]}"));   // false
console.log(stack.validateParanthesis(""));          // true (empty string is valid)
