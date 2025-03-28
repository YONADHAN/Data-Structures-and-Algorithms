class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    //checking tree is empty or not
    isEmpty(){
        return this.root === null;
    }

    //inserting values in bst
    insert(value){
        const newNode  = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else {
            if(root.right === null) {
                root.right = newNode;
            }else {
                this.insertNode(root.right, newNode);
            }
        }       

    }


     //delete a value
     delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value){
        if(root === null) {
            return root;
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value);
        }else if(value>root.value){
            root.right = this.deleteNode(root.right, value);
        }else{
            if(!root.left && !root.right) {
                return null;
            }
            if(!root.left) {
                return root.right;
            }else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }




    //search values in bst
    search(root, value) {
        if(!root){
            return false;
        }else {
            if(root.value === value) {
                return true;
            }else if(value < root.value) {
                return this.search(root.left, value)
            }else {
                return this.search(root.right, value)
            }
        }
    }

    //printing trees in 3 diff ways
//dfs
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
//bfs
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    //finding minimum value - left most node

    min(root) {
        if(!root.left) {
            return root.value;
        }else {
            return this.min(root.left)
        }
    }
    //finding maximum value - right most node
    max(root) {
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right)
        }
    }

}


const bst = new BinarySearchTree();

console.log("Tree is empty?",bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 20));


bst.preOrder(bst.root)

bst.inOrder(bst.root)

bst.postOrder(bst.root)

bst.levelOrder(bst.root)


console.log(bst.min(bst.root));
console.log(bst.max(bst.root));

bst.levelOrder()
bst.delete(3)
bst.levelOrder()

