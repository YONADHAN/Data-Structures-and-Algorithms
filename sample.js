class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentindex(i){
        return Math.floor((i-1)/2);
    }
    getleftChildIndex(i){
        return i*2+1
    }
    getrightChildIndex(i){
        return i*2+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index){
        let parentIndex = this.getParentindex(index);
        while(index>0 && this.heap[parentIndex]>this.heap[index]){
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentindex(index);
        }

    }

    extractMin(){
        if(this.heap.length === 0){
            return 0
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }

        let min = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index){
        let smallest = index;
        let leftIndex = this.getleftChildIndex(index);
        let rightIndex = this.getrightChildIndex(index);

        if(leftIndex<this.heap.length && this.heap[leftIndex]<this.heap[smallest]){
            smallest = leftIndex
        }
        if(rightIndex<this.heap.length && this.heap[rightIndex]<this.heap[smallest]){
            smallest = rightIndex
        }
        if(smallest !== index){
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }

    }

    heapSort(arr){
        const minheap = new MinHeap();
        for(let val of arr){
            minheap.insert(val);
        }
        let sorted = [];
        while(minheap.heap.length>0){
            sorted.push(minheap.extractMin());
        }
        return sorted;
    }
}

class Graph{
    constructor(){
        this.adjList = new Map()
    }

    addNode(node){
        this.adjList.set(node, [])
    }

    addEdge(node1, node2, weight){
        this.adjList.get(node1).push({node: node2, weight: weight});
        this.adjList.get(node2).push({node: node1, weight: weight})
    }

    dijikstra(startNode){
       let pq = new MinHeap();

       let distances = new Map();
       let previous = new Map();

       for(let node of this.adjList.keys()){
        distances.set(node, Infinity);
        previous.set(node, null);
       }

       distances.set(startNode, 0);
       pq.insert({node: startNode, priority: 0})

       while(!pq.isEmpty()){
        let {node} = pq.extractMin();

        for(let neighbor of this.adjList.get(node)){
            let newDist = distances.get(node)+neighbor.weight;
            if(newDist < distances.get(neighbor.node)){
                distances.set(neighbor.node, newDist);
                previous.set(neighbor.node,node);
                pq.insert({node:neighbor.node,priority:newDist})
            }
        }
       }
       return distances;
    }
}