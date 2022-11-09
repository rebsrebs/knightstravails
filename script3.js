//ADJACENCY LIST VERSION

//NODE VLASS
class Node {
  constructor(locationArray) {
  this.locationArray = locationArray;
  this.x = this.locationArray[0];
  this.y = this.locationArray[1];
  this.edgesList = [];
  }

  //METHODS
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
//END NODE CLASS

const vertices = [];

//Makes 64 nodes for every location on chess board
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


const pushToEachOther = function(node, newX, newY) {
  console.log(`newX is ${newX} and newY is ${newY}`);
  if ((0 < newY && newY < 9) && (0 < newX && newX < 9)) {
    var adjacentNode = vertices.find(item => item.x === newX && item.y === newY);
    console.log('adjacent node:');
    console.log(adjacentNode);

    node.edgesList.includes(adjacentNode)? console.log('already in here') : node.edgesList.push(adjacentNode);

    adjacentNode.edgesList.includes(node)? console.log('already in there') : adjacentNode.edgesList.push(node);
  } else {
    console.log('This is not on the board.');
  }
}
  
// Find all adjacent nodes to the given node and put them in that node's edgeList
const connect = function(node) {
  // make variables
  let xP2 = parseFloat(node.x) + 2;
  let xM2 = parseFloat(node.x) - 2;
  let xP1 = parseFloat(node.x) + 1;
  let xM1 = parseFloat(node.x) - 1;
  let yP2 = parseFloat(node.y) + 2;
  let yM2 = parseFloat(node.y) - 2;
  let yP1 = parseFloat(node.y) + 1;
  let yM1 = parseFloat(node.y) - 1;
  
  //Forward 2 Right 1
  pushToEachOther(node, xP1, yP2);
  //Forward 2 Left 1
  pushToEachOther(node, xM1, yP2);
  //Backward 2 Right 1
  pushToEachOther(node, xP1, yM2);
  //Backward 2 Left 1
  pushToEachOther(node, xM1, yM2);
  //Right 2 Forward 1
  pushToEachOther(node, xP2, yP1);
  //Right 2 Backward 1
  pushToEachOther(node, xP2, yM1);
  //Left 2 Forward 1
  pushToEachOther(node, xM2, yP1);
  //Left 2 Backward 1
  pushToEachOther(node, xM2, yM1);
}


const makeConnections = function() {
  vertices.forEach(connect);
}


// GAMEBOARD CLASS
class GameBoard {

  constructor (nodes) {
    this.nodes = [...nodes]; // ES6 spread operator - short for pushing individual things into new array)
  }

  addToGraph(node) {
    this.nodes.push(node);
  }
}


const findShortestPath = function(current, destination, counter = 0) {

  counter++;

  // base case
  // if current edgesList contains destination
  if (current.edgesList.includes(destination)){
    return counter;
  } else {
    for (i = 0; i < current.edgesList.length; i++) {
      return findShortestPath(current.edgesList[i], destination, counter);
    }
  }
}














// const vertexIdxs = {
//   'A': 0,
//   'B': 1,
//   'C': 2,
//   'D': 3,
//   'E': 4
//   }

//     var array = [1, 3],
//     prizes = [[1, 3], [1, 4]],
//     includes = prizes.some(a => array.every((v, i) => v === a[i]));
// console.log(includes);
// This is a neat one! But be aware that if array has a length of 0, it always will return true, and I don't think you want that. So, you should really add the array.length &&  before array.every(... – 




  

  



// const vertices = ['A', 'B', 'C', 'D', 'E']

// const adjacency_list = [
//   ['B', 'D'] // A's adjacency list
//   ['A', 'C']
//   ['B', 'C', 'E']
//   ['A', 'C', 'E']
//   ['C', 'D']
//   ]

