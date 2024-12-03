class Node {
    constructor(value){
        this.data = value
        this.left = null
        this.right = null
    }
}
// const bananaNode = new Node(102); < Check if it works
// console.log(bananaNode);

class BinaryTree {
    constructor(){
        this.root = null
        // when a new Tree is made, it has a root property
    }
    insert(data){
        const node = new Node(data)

        if (!this.root) return (this.root = node);
        // Make new node the root if there is no tree / empty tree

        let walker = this.root

        while (true) { // use a while loop if you don't know how long you will loop. NOTE: Since its true, loop will be infinite. Create a break condition
            if (walker.data === data) return // if a duplicate - break

            let direction = data < walker.data ? "left" : "right";
            // Logic for left and right are the same. So let's create a variable that controls where the node goes 
            // this keeps our code DRY. 
            if (!walker[direction]) return (walker[direction] = node);

            walker = walker[direction];
        }
    }

    search(val){
        if (!this.root) return false // If empty, just return - nothing to search

        let walker = this.root

        while (walker) {
            if(walker.data === val) return true;

            let direction = val < walker.data ? "left" : "right";

            walker = walker[direction];
        }
        return false
    
    }
    size(node){
        // calculate the number of nodes in the tree, starting from the given node
    }
    getMax(){
        // return the maximum value stored in the tree
    }
    height(node = this.root){
        if (!this.root) return 0; // < No list / empty

        let maxHeight = 0;

        const checker = (node, height) => {
            if (node) {
                maxHeight = Math.max(maxHeight, height)
                // recursively call checker on left
                checker(node.left, height + 1) // < plus 1 because we start at the root. 
                // recursively call checker on right
                checker(node.right, height + 1)
            }

        }
        // Why is checker inside the method and not global?
        // It's because of scope. If it was global it wouldn't have access to the variable 'maxHeight' which is in the scope of our height method. 

        checker(node, 1)
        return maxHeight;
    }
    isBalanced(node){
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(50)
binaryTree.insert(34)
binaryTree.insert(1)
binaryTree.insert(90)
// binaryTree.search(1)
console.log(binaryTree.height)

module.exports = {
    Node,
    BinaryTree
}