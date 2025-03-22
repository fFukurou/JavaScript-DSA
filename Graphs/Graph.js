class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // PRINT GRAPH
    printGraph() {
        for (let vertex in this.adjacencyList) { // Correct way to iterate over an object
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }

    // ADD VERTEX
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    // ADD EDGE
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    // REMOVE EDGE
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {

            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                .filter(v => v !== vertex2);
    
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                .filter(v => v !== vertex1);
            return true;
        }
        return false;
    }

    // REMOVE VERTEX
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return false;
        while (this.adjacencyList[vertex].length != 0) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }

        delete this.adjacencyList[vertex];
        return true;
    }
}







let myGraph = new Graph();

myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');

myGraph.addEdge('A', 'B');
myGraph.addEdge('C', 'B');
myGraph.addEdge('C', 'D');

myGraph.removeEdge('B', "A");
myGraph.removeEdge('B', "A");

myGraph.printGraph();


