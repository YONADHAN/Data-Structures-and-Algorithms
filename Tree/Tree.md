### **Tree vs. Graph – Key Differences & Interview Guide**  

#### **Definition:**  
- **Tree** – A hierarchical data structure with nodes connected by edges, having a single root and no cycles.  
- **Graph** – A collection of nodes (vertices) connected by edges, which may have cycles and can be directed or undirected.  

#### **Similarity:**  
- Both consist of nodes and edges.  
- Can be represented using adjacency lists or matrices.  

#### **Differences:**  
| Feature        | Tree | Graph |
|--------------|------|------|
| Structure   | Hierarchical | Network-based |
| Cycles      | No cycles | Can have cycles |
| Connectivity | Always connected | May be connected or disconnected |
| Parent-child relation | Exists | Not necessary |

#### **Applications:**  
- **Tree:** File systems, databases (B-Trees), routing protocols.  
- **Graph:** Social networks, shortest path algorithms (Dijkstra), recommendation systems.  

#### **Merits & Demerits:**  
| Aspect | Tree | Graph |
|--------|------|------|
| **Efficiency** | Faster operations (O(log N) in BST) | Can be complex (Graph traversal O(V+E)) |
| **Flexibility** | Less flexible due to strict hierarchy | More flexible for representing complex relationships |

#### **Code Implementation (Basic Tree & Graph in JavaScript):**  

```javascript
// Tree Node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Graph using adjacency list
class Graph {
    constructor() {
        this.adjList = {};
    }

    addEdge(u, v) {
        if (!this.adjList[u]) this.adjList[u] = [];
        if (!this.adjList[v]) this.adjList[v] = [];
        this.adjList[u].push(v);
        this.adjList[v].push(u); // For undirected graph
    }
}
```

#### **Types:**  
- **Trees:** Binary Tree, BST, AVL Tree, B-Tree, Heap  
- **Graphs:** Directed, Undirected, Weighted, Unweighted, Cyclic, Acyclic  

---

### **Tree Terminologies**
- **Node** – A fundamental unit of a tree that contains data and links to child nodes.
- **Root** – The topmost node of a tree, having no parent.
- **Parent** – A node that has one or more child nodes.
- **Child** – A node directly connected to another node when moving away from the root.
- **Sibling** – Nodes that share the same parent.
- **Leaf** – A node with no children.
- **Degree** – The number of children a node has.
- **Depth** – The number of edges from the root to a specific node.
- **Height** – The longest path from a node to a leaf.
- **Subtree** – A tree formed by considering a node and its descendants.
- **Binary Tree** – A tree where each node has at most two children.
- **Balanced Tree** – A tree where the height difference between left and right subtrees is minimal.

---

### **Linear vs. Non-Linear Data Structure**

#### **Definition:**
- **Linear Data Structure** – Elements are arranged sequentially, where each element is connected to its previous and next element.
- **Non-Linear Data Structure** – Elements are arranged hierarchically or in complex relationships.

#### **Differences:**
| Feature | Linear Data Structure | Non-Linear Data Structure |
|---------|----------------------|-------------------------|
| Storage | Sequential (array, list) | Hierarchical or complex (tree, graph) |
| Traversal | Single traversal path | Multiple traversal paths |
| Examples | Arrays, Linked Lists, Stacks, Queues | Trees, Graphs |
| Implementation Complexity | Simpler | More complex |

#### **Applications:**
- **Linear:** Memory management, process scheduling, stack operations.
- **Non-Linear:** Database indexing (B-Trees), network routing, AI decision trees.

#### **Merits & Demerits:**
| Aspect | Linear | Non-Linear |
|--------|--------|------------|
| **Ease of Use** | Easier to implement | More complex to design |
| **Efficiency** | May require more memory for large data | Efficient for hierarchical relationships |
| **Flexibility** | Less flexible | More flexible for complex data representation |

#### **Code Implementation in JavaScript:**

```javascript
// Linear Data Structure - Queue
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
}

// Non-Linear Data Structure - Binary Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
```

#### **Types:**
- **Linear:** Arrays, Linked Lists, Stacks, Queues.
- **Non-Linear:** Trees, Graphs, Hash Tables.

### **Types of Trees**

#### **1. Binary Tree**
A tree where each node has at most two children (left and right).
- **Full Binary Tree** – Every node has 0 or 2 children.
- **Complete Binary Tree** – All levels are fully filled except possibly the last, which is filled from left to right.
- **Balanced Binary Tree** – The height difference between left and right subtrees is minimal.
- **Unbalanced Binary Tree** – A tree where one subtree is significantly taller than the other.

#### **2. Binary Search Tree (BST)**
A binary tree where the left child contains values smaller than the parent, and the right child contains values greater than the parent. Enables efficient searching, insertion, and deletion (O(log N)).

#### **3. AVL Tree (Self-Balancing BST)**
A BST that maintains a height balance by ensuring the difference in heights of left and right subtrees is at most 1. Rotations are used to maintain balance.

#### **4. Red-Black Tree (Self-Balancing BST)**
A BST that maintains balance by enforcing properties using color (Red/Black) rules. Ensures O(log N) operations for insertion, deletion, and search.

#### **5. Ternary Tree**
A tree where each node can have up to three children.

#### **6. N-ary Tree**
A general tree where each node can have at most N children. Used in applications like trie (prefix trees) and file system hierarchies.

### **Tree Properties & Comparisons**

#### **1. Complete Tree vs. Full Tree**
- **Complete Tree** – All levels are fully filled except possibly the last, which is filled from left to right.
- **Full Tree** – Every node has either 0 or 2 children (no node has only one child).

#### **2. Balanced Tree vs. Unbalanced Tree**
- **Balanced Tree** – A tree where the height difference between the left and right subtrees is minimal, typically O(log N) height.
- **Unbalanced Tree** – A tree with a large height difference between subtrees, leading to inefficient operations (O(N) height in the worst case).

#### **3. Degree of a Node vs. Degree of a Tree**
- **Degree of a Node** – The number of children a node has.
- **Degree of a Tree** – The maximum degree of any node in the tree.

### **Operations on BST**

#### **1. Insertion in BST (Time Complexity)**
- A new node is inserted at the correct position based on BST properties.
- **Best & Average Case:** O(log N) (Balanced BST)
- **Worst Case:** O(N) (Unbalanced BST)

#### **2. Deletion in BST**
- Three cases for node deletion:
  1. **Leaf Node:** Directly remove the node.
  2. **Node with One Child:** Replace the node with its child.
  3. **Node with Two Children:** Replace the node with its in-order successor or predecessor and delete that node.
- **Time Complexity:** O(log N) (Balanced), O(N) (Unbalanced)

#### **3. Search in a BST (Time Complexity)**
- Traverse the tree based on comparison.
- **Best & Average Case:** O(log N) (Balanced BST)
- **Worst Case:** O(N) (Unbalanced BST)

#### **4. Allowing Duplicate Elements in BST**
- Approaches:
  - Store duplicates in the left or right subtree.
  - Maintain a frequency count in each node.
  - Use balanced BST variants like AVL or Red-Black Trees to optimize performance.

### **Tree Traversals**

#### **1. Level Order Traversal (BFS)**
- Traverses the tree level by level from top to bottom.
- Uses a queue for implementation.
- **Time Complexity:** O(N)

#### **2. Depth-First Traversal (DFS)**
- Explores as far as possible along each branch before backtracking.
- Includes three types:
  - **Preorder (Root → Left → Right)**
  - **Inorder (Left → Root → Right)**
  - **Postorder (Left → Right → Root)**
- **Time Complexity:** O(N)

#### **3. Preorder Traversal (Root → Left → Right)**
- Visits the root node first, then recursively traverses the left and right subtrees.
- Used for copying or serializing a tree.

#### **4. Inorder Traversal (Left → Root → Right)**
- Visits the left subtree, then the root, then the right subtree.
- Produces sorted output in a BST.

#### **5. Postorder Traversal (Left → Right → Root)**
- Traverses the left subtree, then the right subtree, and visits the root last.
- Used for deleting a tree or evaluating expressions.

```javascript


// 1. Check if Two BSTs are Identical
function areIdentical(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return root1.value === root2.value &&
           areIdentical(root1.left, root2.left) &&
           areIdentical(root1.right, root2.right);
}

// 2. Find Closest Element to a Target in BST
function closestValue(root, target) {
    let closest = root.value;
    while (root) {
        if (Math.abs(root.value - target) < Math.abs(closest - target)) {
            closest = root.value;
        }
        root = target < root.value ? root.left : root.right;
    }
    return closest;
}

// 3. Second Largest Element in BST
function secondLargest(root) {
    let values = [];
    function inorder(node) {
        if (node) {
            inorder(node.left);
            values.push(node.value);
            inorder(node.right);
        }
    }
    inorder(root);
    return values.length > 1 ? values[values.length - 2] : null;
}

// 4. Kth Smallest Element in BST (Using Inorder Traversal)
function kthSmallest(root, k) {
    let values = [];
    function inorder(node) {
        if (node) {
            inorder(node.left);
            values.push(node.value);
            inorder(node.right);
        }
    }
    inorder(root);
    return values[k - 1];
}

// 5. Check if a Tree is Balanced
function isBalanced(root) {
    function height(node) {
        if (!node) return 0;
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return height(root) !== -1;
}

// 6. Count Nodes with a Single Child in BST
function countSingleChildNodes(root) {
    if (!root) return 0;
    let count = 0;
    if ((root.left && !root.right) || (root.right && !root.left)) {
        count += 1;
    }
    return count + countSingleChildNodes(root.left) + countSingleChildNodes(root.right);
}

// 7. Validate if a Tree is a BST or Not
function isBST(root, minVal = -Infinity, maxVal = Infinity) {
    if (!root) return true;
    if (root.value <= minVal || root.value >= maxVal) return false;
    return isBST(root.left, minVal, root.value) && isBST(root.right, root.value, maxVal);
}

// 8. Depth of a Node in a Tree
function depthOfNode(root, target, depth = 0) {
    if (!root) return -1;
    if (root.value === target) return depth;
    let left = depthOfNode(root.left, target, depth + 1);
    return left !== -1 ? left : depthOfNode(root.right, target, depth + 1);
}

// 9. Implement a Tree with Multiple Children and Display Elements
class NaryTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    display(level = 0) {
        console.log(' '.repeat(level * 2) + this.value);
        for (let child of this.children) {
            child.display(level + 1);
        }
    }
}

// 10. Height of a Tree (Implementation)
function treeHeight(root) {
    if (!root) return 0;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}
```



Here's the README for **Self-Balancing Trees (AVL, Red-Black Tree) & Dijkstra’s Algorithm** in an interview-friendly format.  

---

### **7. Advanced Topics – Self-Balancing Trees & Dijkstra’s Algorithm**  

#### **1. Self-Balancing Trees**  
Self-balancing trees automatically adjust their structure to maintain a balanced height, ensuring efficient operations.  

##### **(a) AVL Tree (Adelson-Velsky and Landis Tree)**  
- A self-balancing **binary search tree (BST)** where the height difference between left and right subtrees (balance factor) is at most **1**.  
- If imbalance occurs after insertion/deletion, rotations (LL, LR, RL, RR) restore balance.  
- **Time Complexity:**  
  - Insertion, Deletion, Search → **O(log N)**  

##### **(b) Red-Black Tree (RBT)**  
- A self-balancing BST with each node colored **Red or Black**.  
- Rules:  
  1. Root is always black.  
  2. No two consecutive red nodes exist.  
  3. Every path from a node to its descendant null nodes has the same number of black nodes.  
  - Uses **recoloring and rotations** to maintain balance.  
- **Time Complexity:**  
  - Insertion, Deletion, Search → **O(log N)**  

##### **JavaScript Implementation – AVL Tree**  
```javascript
class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    getHeight(node) {
        return node ? node.height : 0;
    }

    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    rotateRight(y) {
        let x = y.left;
        let T = x.right;
        x.right = y;
        y.left = T;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        return x;
    }

    rotateLeft(x) {
        let y = x.right;
        let T = y.left;
        y.left = x;
        x.right = T;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return y;
    }

    insert(node, value) {
        if (!node) return new AVLNode(value);
        if (value < node.value) node.left = this.insert(node.left, value);
        else node.right = this.insert(node.right, value);

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        let balance = this.getBalanceFactor(node);

        // Rotations to maintain balance
        if (balance > 1 && value < node.left.value) return this.rotateRight(node);
        if (balance < -1 && value > node.right.value) return this.rotateLeft(node);
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }
}
```

---

#### **2. Dijkstra’s Algorithm (Graph-based but Useful for Weighted Trees)**  
- Finds the **shortest path** from a source node to all other nodes in a weighted graph/tree.  
- Uses a **priority queue** (min-heap) to always expand the nearest node first.  
- **Time Complexity:**  
  - **O((V + E) log V)** using a Min Heap (Priority Queue).  

##### **JavaScript Implementation – Dijkstra’s Algorithm**  
```javascript
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        this.items.push({ element, priority });
        this.items.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.items.shift().element;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class Graph {
    constructor() {
        this.adjList = {};
    }

    addEdge(u, v, weight) {
        if (!this.adjList[u]) this.adjList[u] = [];
        if (!this.adjList[v]) this.adjList[v] = [];
        this.adjList[u].push({ node: v, weight });
        this.adjList[v].push({ node: u, weight });
    }

    dijkstra(start) {
        let distances = {};
        let pq = new PriorityQueue();
        let prev = {};

        for (let node in this.adjList) {
            distances[node] = Infinity;
            prev[node] = null;
        }
        distances[start] = 0;
        pq.enqueue(start, 0);

        while (!pq.isEmpty()) {
            let minNode = pq.dequeue();

            this.adjList[minNode].forEach(neighbor => {
                let alt = distances[minNode] + neighbor.weight;
                if (alt < distances[neighbor.node]) {
                    distances[neighbor.node] = alt;
                    prev[neighbor.node] = minNode;
                    pq.enqueue(neighbor.node, alt);
                }
            });
        }

        return { distances, prev };
    }
}

// Example Usage
let graph = new Graph();
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 1);
graph.addEdge("C", "B", 2);
graph.addEdge("B", "D", 1);
graph.addEdge("C", "D", 5);

console.log(graph.dijkstra("A"));
```

---

### **Key Takeaways for Interviews**
| Topic | Explanation |
|-------|-------------|
| **AVL Tree** | Self-balancing BST, maintains height balance using rotations (O(log N)). |
| **Red-Black Tree** | Self-balancing BST using color properties, efficient insert/delete. |
| **Dijkstra’s Algorithm** | Finds the shortest path in weighted graphs/trees (O((V+E) log V)). |

Would you like me to add more **problems** or **explanations** on any specific topic? 🚀



### **8. Applications of Trees**  

---

### **1. Spanning Tree & Minimum Spanning Tree (MST)**  
#### **Spanning Tree**  
A **spanning tree** of a graph is a subgraph that contains all the vertices of the original graph but with the **minimum number of edges** required to keep it connected.  
- A **spanning tree** of a graph with `N` nodes has exactly **N-1 edges** and no cycles.  
- A **connected graph** can have multiple spanning trees.  

#### **Minimum Spanning Tree (MST)**  
A **Minimum Spanning Tree (MST)** is a spanning tree of a weighted graph that has the **minimum possible sum of edge weights**.  
- **Kruskal’s Algorithm** and **Prim’s Algorithm** are commonly used to find an MST.  
- **Time Complexity:**  
  - **Prim’s Algorithm** → `O(E log V)` (using a priority queue)  
  - **Kruskal’s Algorithm** → `O(E log E)` (using sorting & union-find)  

#### **JavaScript Implementation – Kruskal’s Algorithm (MST)**
```javascript
class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(0);
    }

    find(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(u, v) {
        let rootU = this.find(u);
        let rootV = this.find(v);
        if (rootU !== rootV) {
            if (this.rank[rootU] > this.rank[rootV]) {
                this.parent[rootV] = rootU;
            } else if (this.rank[rootU] < this.rank[rootV]) {
                this.parent[rootU] = rootV;
            } else {
                this.parent[rootV] = rootU;
                this.rank[rootU]++;
            }
        }
    }
}

function kruskalMST(edges, n) {
    edges.sort((a, b) => a[2] - b[2]); // Sort by weight
    let uf = new UnionFind(n);
    let mst = [];
    for (let [u, v, w] of edges) {
        if (uf.find(u) !== uf.find(v)) {
            uf.union(u, v);
            mst.push([u, v, w]);
        }
    }
    return mst;
}

// Example Usage
let edges = [
    [0, 1, 10], [0, 2, 6], [0, 3, 5],
    [1, 3, 15], [2, 3, 4]
];
console.log(kruskalMST(edges, 4)); 
```

---

### **2. Uses of Spanning Tree**  
Spanning trees are widely used in various applications, including:  
1. **Network Design** – Used in network topology to ensure connectivity with minimal wiring.  
2. **Routing Algorithms** – Used in Ethernet protocols like **Spanning Tree Protocol (STP)** to avoid loops.  
3. **Cluster Analysis** – Helps in hierarchical clustering and organization of data.  
4. **Image Segmentation** – Used in **computer vision** to extract features.  
5. **Circuit Design** – Helps in designing minimal wiring for circuits.  

---

### **3. Applications of Trees in Real-world Problems**  
Trees are one of the most fundamental data structures and are used in various real-world applications:  

#### **(a) Data Storage & Retrieval**  
1. **File Systems** – Directories and files are organized as trees (e.g., NTFS, Ext4).  
2. **Databases** – **B-Trees, B+ Trees** are used in indexing for faster search.  
3. **XML/HTML Parsing** – **DOM (Document Object Model)** is structured as a tree.  

#### **(b) Searching & Sorting**  
4. **Binary Search Trees (BST)** – Used for **fast search, insert, delete operations**.  
5. **Heaps (Priority Queues)** – Used in **heap sort** and task scheduling.  

#### **(c) Artificial Intelligence & Machine Learning**  
6. **Decision Trees** – Used in ML algorithms for classification and regression.  
7. **Trie (Prefix Tree)** – Used in search engines for auto-complete and spell checking.  

#### **(d) Network & Web Applications**  
8. **Routing Protocols** – Used in **OSPF (Open Shortest Path First)** routing.  
9. **DNS Hierarchy** – Domain Name System (DNS) follows a tree structure.  

#### **(e) Graph & Navigation Algorithms**  
10. **Shortest Path Algorithms** – Used in GPS navigation (Dijkstra, A*).  
11. **Compiler Design** – Abstract Syntax Trees (ASTs) are used in parsing source code.  

---

### **Key Takeaways for Interviews**
| Topic | Explanation |
|-------|-------------|
| **Spanning Tree** | A tree that connects all vertices of a graph with `N-1` edges and no cycles. |
| **Minimum Spanning Tree (MST)** | A spanning tree with the smallest possible total edge weight (Kruskal’s & Prim’s Algorithm). |
| **Applications** | File systems, databases, routing protocols, AI decision trees, network design, and web navigation. |

Would you like any **problem-solving questions** or **additional explanations** on these topics? 🚀


### **9. Practice Questions (Leetcode & Others)**  

Here are two commonly asked tree-related problems in coding interviews along with their JavaScript implementations.

---

### **1️⃣ Kth Smallest Element in a BST**  
**(Leetcode 230 - [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/))**  

#### **Problem Statement:**  
Given the `root` of a **Binary Search Tree (BST)** and an integer `k`, return the **kth smallest element** in the BST.  
- **Constraints:**  
  - The number of nodes in the tree is `n` where `1 ≤ k ≤ n ≤ 10⁴`.  
  - The BST properties are maintained: Left subtree < Root < Right subtree.  

#### **Approach:**  
- **Inorder Traversal (Left → Root → Right)** gives **sorted order** in BST.  
- Traverse the tree and return the `k-th` smallest element.  
- **Time Complexity:** `O(N)` (Worst case, if unbalanced).  
- **Space Complexity:** `O(H)`, where `H` is the height of the tree (log N for balanced BST, N for skewed BST).  

#### **JavaScript Implementation:**
```javascript
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (!node || result !== null) return;
        inorder(node.left);
        count++;
        if (count === k) {
            result = node.value;
            return;
        }
        inorder(node.right);
    }

    inorder(root);
    return result;
}

// Example Usage
let root = new TreeNode(5, 
    new TreeNode(3, new TreeNode(2), new TreeNode(4)), 
    new TreeNode(6)
);
console.log(kthSmallest(root, 3)); // Output: 4
```

---

### **2️⃣ Number of Islands**  
**(Leetcode 200 - [Number of Islands](https://leetcode.com/problems/number-of-islands/))**  

#### **Problem Statement:**  
Given an `m x n` grid where:  
- `'1'` represents **land**,  
- `'0'` represents **water**,  
Return the number of islands (a group of `1`s connected horizontally or vertically).  

#### **Approach:**  
- We use **DFS (Depth-First Search)** or **BFS (Breadth-First Search)** to traverse connected land (`1`s).  
- Whenever we find a `1`, we mark the entire island as visited.  
- **Time Complexity:** `O(M × N)` since we visit each cell once.  
- **Space Complexity:** `O(M × N)` in the worst case (when all are `1`s).  

#### **JavaScript Implementation (DFS Approach):**
```javascript
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    let count = 0;
    let rows = grid.length, cols = grid[0].length;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') return;
        grid[r][c] = '0'; // Mark visited
        dfs(r + 1, c); // Down
        dfs(r - 1, c); // Up
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }
    return count;
}

// Example Usage
let grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];
console.log(numIslands(grid)); // Output: 3
```

---

### **Summary of Concepts Covered**
| Question | Concept Tested | Approach Used |
|----------|---------------|--------------|
| **Kth Smallest in BST** | Inorder Traversal, BST Properties | Recursive DFS (Inorder) |
| **Number of Islands** | Graph Traversal, DFS/BFS | DFS Recursion (Flood Fill) |

Would you like solutions for **more problems**, or do you want **BFS implementation** for the **Number of Islands**? 🚀
