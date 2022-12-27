class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; // adjacency list
  }

  addAdjacent(node) {
    this.adjacents.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1);
      return node;
    }
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);
    sourceNode.addAdjacent(destinationNode);
    if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }
    return [sourceNode, destinationNode];
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  removeVertex(value) {
    const current = this.nodes.get(value);
    if (current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(current);
      }
    }
    return this.nodes.delete(value);
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);
      if (this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }
    return [sourceNode, destinationNode];
  }

  bfs(first) {
    const visited = new Map();
    const visitList = [];
    const result = [];
    visitList.push(first);

    while (visitList.length > 0) {
      const node = visitList.shift();
      if (node && !visited.has(node)) {
        console.log("result L: ", node.value);
        // yield node;
        result.push(node.value);
        visited.set(node);
        node.getAdjacents().forEach((adj) => visitList.push(adj));
      }
    }
    return result;
  }

  dfs(first) {
    const result = [];
    const stack = [];
    const visited = new Map();
    stack.push(first);
    while (stack.length > 0) {
      const node = stack.pop();
      if (node && !visited.has(node)) {
        result.push(node.value);
        visited.set(node);
        node.getAdjacents().forEach((adj) => stack.push(adj));
      }
    }
    return result;
  }
}

Graph.UNDIRECTED = Symbol("directed graph"); // two-ways edges
Graph.DIRECTED = Symbol("undirected graph"); // one-way edges
const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

const bfsFromFirst = graph.bfs(first);
console.log(bfsFromFirst);
const dfsFromFirst = graph.dfs(first);
console.log(dfsFromFirst);
// bfsFromFirst.next().value.value; // 1
// bfsFromFirst.next().value.value; // 2
// bfsFromFirst.next().value.value; // 3
// bfsFromFirst.next().value.value; // 4
