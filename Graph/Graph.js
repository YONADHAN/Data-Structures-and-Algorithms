class Graph {
    constructor() {
      this.adjList = new Map()
    }
  
    addNode(value) {
      if (!this.adjList.has(value)) {
        console.log("Node Already Exist...");
        return
      }
      this.adjList.set(value, []);
      console.log("Node Added")
    }
  
    addEdges(node1, node2){
      if (!this.adjList.has(node1)) {
        this.addNode(node1)
      }
      if (!this.adjList.has(node2)) {
        this.addNode(node2)
      }
      if (!this.adjList.get(node1).includes(node2)) {
        this.adjList.get(node1).push(node2)
      }
      if (!this.adjList.get(node2).includes(node1)) {
        this.adjList.get(node2).push(node1)
      }
    }
  
    removeEdge(node1, node2) {
      if (this.adjList.has(node1) && this.adjList.has(node2)) {
        this.adjList.set(
          node1,
          this.adjList.get(node1).filter((adj) => adj !== node2)
        )
        this.adjList.set(
          node2,
          this.adjList.get(node2).filter((adj) => adj !== node1)
        )
      }
      console.log("The Edge Removed Successfully");
    }
  
    removeNode(node) {
      if (!this.adjList.has(node)) {
        console.log("This Node Does Not Exist");
        return
      }
      for (let adj of this.adjList.get(node)) {
        this.removeEdge(adj, node)
      }
      this.adjList.delete(node)
      console.log("The Node deleted successfully");
    }
  
    bfs(startNode) {
      if (!this.adjList.has(startNode)) {
          console.log("Start Node Does Not Exist");
          return [];
      }
      let bfs = [];
      let queue = [];
      let visited = new Set();
      
      queue.push(startNode);
      visited.add(startNode);
      
      while (queue.length > 0) {
          let crr = queue.shift(); // Remove from front (FIFO)
          bfs.push(crr);
          
          for (let val of this.adjList.get(crr)) {
              if (!visited.has(val)) {
                  visited.add(val);
                  queue.push(val); // Add to queue
              }
          }
      }
      return bfs;
  }
  
  
    dfs(startnode, visited = new Set(), result = []) {
      if (!this.adjList.has(startnode)) {
        console.log("Start Node Does not exist")
        return []
      }
      visited.add(startnode)
      result.push(startnode)
  
      for (let val of this.adjList.get(startnode)) {
        if (!visited.has(val)) {
          this.dfs(val, visited, result)
        }
      }
      return result
    }
    
  }
  