class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    // CONSTRUCTOR
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // PRINT LINKEDLIST
    printList() {
        let temp = this.head; 
        while (temp != null) {
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
            this.tail = newNode;
        }
        this.length += 1;
        return true;
    }

    // POP
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let prev = temp;
            while (temp.next != null) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            this.tail = prev;
        }

        this.length -= 1;
        return temp;
    }

    // UNSHIFT (adding node to start)
    unshift(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;
        return true;
    }

    // SHIFT (removing node from start)
    shift() {
        if (this.length == 0) return undefined;

        let temp = this.head;

        if (this.length === 1) this.tail = null;

        this.head = temp.next;
        temp.next = null;

        this.length -= 1;
        return temp;
    }

    // GET
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    // SET
    set(index, value) {
        let temp = this.get(index);
        if (temp == null) return false;

        temp.value = value;
        return true;
    }

    // INSERT
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        let newNode = new Node(value);
        let before = this.get(index - 1);
        let current = before.next;

        before.next = newNode;
        newNode.next = current.next;
        this.length += 1;
        return true;
    }

    // REMOVE
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();

        let before = this.get(index - 1);
        let current = before.next;

        before.next = current.next;
        current.next = null;
        this.length -= 1;
        return current;
    }

    // REVERSE
    reverse() {
        if (this.length <= 1) return;

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let before = null;
        let after = temp.next;

        while (temp) {
            after = temp.next;
            temp.next = before;
            before = temp;
            temp = after;
        }
    }
}


let myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
console.log(myLinkedList.pop());
myLinkedList.unshift(0);
console.log(myLinkedList.shift());

myLinkedList.set(0, 11);
myLinkedList.insert(5, 420);
console.log(myLinkedList.remove(5));
myLinkedList.printList();
myLinkedList.reverse();
console.log("----------------------------- Reversed List -----------------------------")
myLinkedList.printList();
// console.log(myLinkedList.get(-1));
