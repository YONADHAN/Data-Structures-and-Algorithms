class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }
    
    insert(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    min(root){
        if(root.left === null){
            return root.value
        }else{
            this.min(root.left)
        }
    }

    max(root){
        if(root.right === null){
            return root.value
        }else{
            this.max(root.right)
        }
    }

    levelOrder(root){
        if(root === null){
            return []
        }
        let queue = []
        queue.push(root)

        while(queue.length > 0){
            let crr = queue.shift()
            console.log(crr.value)
            
            if(crr.left !== null){
                queue.push(crr.left)
            }

            if(crr.right !== null){
                queue.push(crr.right)
            }
        }
    }

    isValidBst(){
        return this.validate(this.root,-Infinity,Infinity)
    }

    validate(node,minVal,maxval){
        if(node===null){
            return true
        }
        if(node.value <= minVal || node.value >= maxval) return false

        return this.validate(node.left,minVal,node.value) && this.validate(node.right,node.value,maxval)
    }

    maxDepth(root){
        if(root===null){
            return 0
        }
        let leftHeight = this.maxDepth(root.left)
        let rightHeight = this.maxDepth(root.right)

        return Math.max(leftHeight,rightHeight) + 1
    }

    secondLargest(){
        if(root==null){
            return null
        }
        let parent = null
        let crr = this.root

        while(crr.right){
            parent = crr
            crr = crr.right
        }

        if(crr.left !== null){
          return this.max(crr.left)
        }
        return parent.value
    }

    closest(target){
        let crr = this.root
        let close = Infinity
        while(crr !== null){
            if(Math.abs(crr.value - target) < Math.abs(close - target)){
                close = crr.value
            }
            if(crr.value < target){
                crr = crr.right
            }else if(crr.value > target){
                crr = crr.left
            }else{
                return crr.value
            }
        }
        return close
    }

    balanced(root){
        return this.isBalanced(root) !== -1
    }

    isBalanced(root){
        if(root===null){
            return 0
        }

        let leftHeight = this.isBalanced(root.left)
        if(leftHeight === -1) return -1

        let rightHeight = this.isBalanced(root.right)
        if(rightHeight === -1) return -1

        if(Math.abs(rightHeight - leftHeight) > 1) return -1 

        return Math.max(leftHeight,rightHeight) + 1
    }

    delete(value){
        this.root = this.deleteNode(value,this.root)
    }

    deleteNode(value, root){
        if(root==null){
            return null
        }
        if(root.value > value){
            root.left = this.deleteNode(value,root.left)
        }else if(root.value < value){
            root.right = this.deleteNode(value,root.right)
        }else{
            if(root.left === null && root.right===null){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }else{
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.value,root.right)
            }
        }
        return root 
    }
}

