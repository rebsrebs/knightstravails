//ADJACENCY LIST VERSION


class Node {
  constructor(locationArray) {
  this.locationArray = locationArray;
  this.x = this.locationArray[0];
  this.y = this.locationArray[1];
  this.edgesList = [];
  }

  // for undirected graph you want to connect both ways
  connect(node) {
  this.edgesList.push(node);
  node.edgesList.push(this);
  }

  getAdjacentNodes () {
    return this.edgesList.map(edge => edge.value);
  }

  isConnected(node) {
    return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1;
  }
}

const vertices = [];

const makeVertices = function() {
  for (let x = 1; x < 9; x++) {
    for (let y = 1; y < 9; y++) {
      const vertex = new Node([x,y]);
      vertices.push(vertex);
    }
  }
  return vertices;
}

makeVertices();

const connect = function(node) {
  let xP2 = parseFloat(node.x) + 2;
  let xM2 = parseFloat(node.x) - 2;
  let xP1 = parseFloat(node.x) + 1;
  let xM1 = parseFloat(node.x) - 1;
  let yP2 = parseFloat(node.y) + 2;
  let yM2 = parseFloat(node.y) - 2;
  let yP1 = parseFloat(node.y) + 1;
  let yM1 = parseFloat(node.y) - 1;
  // if forward right from node is on board
  if ((0 < yP2 < 9) && (0 < xP1 < 9)) {
    // find that node in the vertices array
    let adjacentNode = vertices.find(item => item.x === xP1 && item.y === yP2);
    console.log(adjacentNode);
    // if that node is not in this node's edgeList


//     var array = [1, 3],
//     prizes = [[1, 3], [1, 4]],
//     includes = prizes.some(a => array.every((v, i) => v === a[i]));
// console.log(includes);
// This is a neat one! But be aware that if array has a length of 0, it always will return true, and I don't think you want that. So, you should really add the array.length &&  before array.every(... – 
 


    if (this.edgesList.some(adjacentNode) == false) {
      // push that node into this node's edgeList
      this.edgesList.push(adjacentNode);
    }
    // if this node is not in that node's edgelist
    if (!adjacentNode.edgeslist.includes(this)) {
      // push this into that node's edgeList
      adjacentNode.edgeslist.push(this);
    } 
  } 
}

const makeConnections = function() {
  // for every node in vertices array
  // run connect(node);
}




// const vertices = ['A', 'B', 'C', 'D', 'E']

// const adjacency_list = [
//   ['B', 'D'] // A's adjacency list
//   ['A', 'C']
//   ['B', 'C', 'E']
//   ['A', 'C', 'E']
//   ['C', 'D']
//   ]



  class Graph {

    constructor (nodes) {
      this.nodes = [...nodes]; // ES6 spread operator - short for pushing individual things into new array)
    }

    addToGraph(node) {
      this.nodes.push(node);
    }
  }
  

  