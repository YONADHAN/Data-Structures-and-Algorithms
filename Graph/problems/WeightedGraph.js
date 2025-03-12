class WeightedGraph {
    constructor() {
      this.adjList = new Map();
    }
  
    addNode(node) {
      if (!this.adjList.has(node)) {
        this.adjList.set(node, []);
      }
    }
  
    addEdge(node1, node2, weight, isdirectional = false) {
      if (!this.adjList.has(node1)) this.addNode(node1);
      if (!this.adjList.has(node2)) this.addNode(node2);
      
      this.adjList.get(node1).push({ node: node2, weight });
      if(!isdirectional){
        this.adjList.get(node2).push({ node: node1, weight });
      } // Remove this for a directed graph
    }
  }
  