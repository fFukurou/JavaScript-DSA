class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    // CONSTRUCTOR
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // PRINT LIST
    printList() {
        let temp = this.head;

        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    // PUSH
    push(value) {
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length ++;
        return true;
    }

    // POP
    pop() {
        if (this.length == 0) return null;
        let temp = this.tail;

        if (this.length == 1) {
            this.tail = null;
            this.head = null;
        }
        else {
            this.tail = temp.prev;
            temp.prev = null;
            this.tail.next = null;
        }
        this.length --;
        return temp;
    }

    // UNSHIFT
    unshift(value) {
        let newNode = new Node(value);

        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length ++ ;
        return true;
    }

    // SHIFT
    shift() {
        if (this.length == 0) return null;
        let temp = this.head;

        if (this.length == 1) {
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            temp.next = null;
            this.head.prev = null;
        }
        this.length --;
        return temp;
    }

    // GET
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let temp = this.head;
        if (index < this.length/2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        }
        else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    // SET
    set(index, value) {
        let temp = this.get(index);
        if (!temp) return false;

        temp.value = value;
        return true;
    }

    // INSERT
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index == 0) return this.unshift(value);
        if (index == this.length) return this.push(value);

        let newNode = new Node(value);
        let previous = this.get(index - 1);
        let after = previous.next;

        previous.next = newNode;
        newNode.prev = previous;
        newNode.next = after;
        after.prev = newNode;
        this.length ++;
        return true;
    }

    // REMOVE
    remove(index) {
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop(); 

        let current = this.get(index);
        if (!current) return null;

        let previous = current.prev;

        previous.next = current.next;
        current.next.prev = previous;
        current.next = null;
        current.prev = null;
        this.length --;
        return current;

    }
}


let myDLL = new DoublyLinkedList(1);

myDLL.push(2);
myDLL.push(3);
myDLL.push(4);
myDLL.push(5);
myDLL.push(6);
myDLL.pop();
myDLL.unshift(0);

// console.log(myDLL.get(2))
myDLL.set(2, 22);

myDLL.printList();