class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // CONSTRUCTOR
    constructor() {
        this.root = null;
    }

    // INSERT
    insert(value) {
        const newNode = new Node(value);
     
        // If tree is empty, set new node as root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
     
        let temp = this.root; // Start traversal from the root node
     
        // Loop until a leaf node is reached
        while (true) {
            // If value already exists, exit
            if (newNode.value === temp.value) return undefined;
     
            // If new value is smaller than current node value
            if (newNode.value < temp.value) {
                // If left child is null, insert new node as left child
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left; // Move to left child
            } else { // If new value is greater than current node value
                // If right child is null, insert new node as right child
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } 
                temp = temp.right; // Move to right child
            }
        }
    }

    // CONTAINS
    contains(value) {
        if (this.root == null) return false;

        let temp = this.root;

        while (temp) {
            if (temp.value == value) return true;

            if (value < temp.value) {
                temp = temp.left;
            }

            else if (value > temp.value) {
                temp = temp.right;
            }
        }

        return false;
        
    }






}


let myBST = new BST();

myBST.insert(5);
myBST.insert(2);
myBST.insert(8);
myBST.insert(6);
myBST.insert(3);
myBST.insert(4);
myBST.insert(9);


console.log( myBST.contains(0) );
