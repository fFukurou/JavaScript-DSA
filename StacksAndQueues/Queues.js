class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    // CONSTRUCTOR
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    // PRINT QUEUE
    printQueue() {
        let temp = this.first;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    // ENQUEUE
    enqueue(value) {
        let newNode = new Node(value);
        if (this.length == 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return true;
    }

    // DEQUEUE
    dequeue() {
        if (this.length == 0) return null;

        let temp = this.first;

        if (this.length == 1) {
            this.last = null;
            this.first = null;
        }
        else {
            this.first = this.first.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    
}


let myQueue = new Queue(1);

myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

myQueue.printQueue();