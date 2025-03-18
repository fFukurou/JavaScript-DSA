class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    // CONSTRUCTOR
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.height = 1;
    }

    // PRINT STACK
    printStack() {
        let temp = this.top;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    // PUSH
    push(value) {
        let newNode = new Node(value);

        if (this.height == 0) {
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.height ++;
        return true;
    }

    // POP
    pop() {
        if (this.height == 0) return null;

        let temp = this.top;

        this.top = this.top.next;
        temp.next = null;

        this.height --;
        return temp;
    }






}




let myStack = new Stack(1);

myStack.push(2);
myStack.push(3);
myStack.push(4);

myStack.pop();
myStack.pop();
myStack.pop();


myStack.printStack();