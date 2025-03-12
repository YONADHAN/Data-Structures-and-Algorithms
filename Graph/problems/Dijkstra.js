class MinHeap {
  constructor() {
      this.heap = [];
  }

  getParentindex(i) {
      return Math.floor((i - 1) / 2);
  }

  getleftChildIndex(i) {
      return i * 2 + 1;
  }

  getrightChildIndex(i) {
      return i * 2 + 2;
  }

  swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
      let parentIndex = this.getParentindex(index);
      while (index > 0 && this.heap[parentIndex].priority > this.heap[index].priority) {
          this.swap(index, parentIndex);
          index = parentIndex;
          parentIndex = this.getParentindex(index);
      }
  }

  extractMin() {
      if (this.heap.length === 0) {
          return null;
      }
      if (this.heap.length === 1) {
          return this.heap.pop();
      }

      let min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min;
  }

  heapifyDown(index) {
      let smallest = index;
      let leftIndex = this.getleftChildIndex(index);
      let rightIndex = this.getrightChildIndex(index);

      if (leftIndex < this.heap.length && this.heap[leftIndex].priority < this.heap[smallest].priority) {
          smallest = leftIndex;
      }
      if (rightIndex < this.heap.length && this.heap[rightIndex].priority < this.heap[smallest].priority) {
          smallest = rightIndex;
      }
      if (smallest !== index) {
          this.swap(index, smallest);
          this.heapifyDown(smallest);
      }
  }

  isEmpty() {
      return this.heap.length === 0;
  }
}

class Graph {
  constructor() {
      this.adjList = new Map();
  }

  addNode(node) {
      this.adjList.set(node, []);
  }

  addEdge(node1, node2, weight) {
      this.adjList.get(node1).push({ node: node2, weight: weight });
      this.adjList.get(node2).push({ node: node1, weight: weight });
  }

  dijkstra(startNode) {
      let pq = new MinHeap();

      let distances = new Map();
      let previous = new Map();

      for (let node of this.adjList.keys()) {
          distances.set(node, Infinity);
          previous.set(node, null);
      }

      distances.set(startNode, 0);
      pq.insert({ node: startNode, priority: 0 });

      while (!pq.isEmpty()) {
          let { node } = pq.extractMin(); // ✅ FIXED: Extract correct node

          for (let neighbor of this.adjList.get(node)) {
              let newDist = distances.get(node) + neighbor.weight;
              if (newDist < distances.get(neighbor.node)) {
                  distances.set(neighbor.node, newDist);
                  previous.set(neighbor.node, node);
                  pq.insert({ node: neighbor.node, priority: newDist }); // ✅ Insert properly
              }
          }
      }
      return distances;
  }
}

// Test Graph
const g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");

g.addEdge("A", "B", 2);
g.addEdge("A", "C", 4);
g.addEdge("B", "C", 1);
g.addEdge("B", "D", 7);
g.addEdge("C", "E", 3);
g.addEdge("D", "E", 1);

console.log(g.dijkstra("A"));
