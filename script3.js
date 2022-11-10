//NODE CLASS
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
    return this.edgesList.map(edge => edge.locationArray);
  }

  // not sure how this works
  isConnected(node) {
    return this.edgesList.map(edge => edge.locationArray).indexOf(node.value) > -1;
  }
}
//END NODE CLASS

// Array to store all of the locations
const vertices = [];

// Makes 64 locations - one for each square of 8x8 chessboard
const makeVertices = function() {
  for (let x = 1; x < 9; x++) {
    for (let y = 1; y < 9; y++) {
      const vertex = new Node([x,y]);
      vertices.push(vertex);
    }
  }
  return vertices;
}

// Create chessboard
makeVertices();

// Utility function to check if node's are already in each other's adjacency lists before pushing them
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
  
// Specifically for a knight
// Utility function to find all adjacent nodes to the given node and put them in that node's edgeList
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

// Connect all board locations from vertices array by filling out adjacency lsits
const makeConnections = function() {
  vertices.forEach(connect);
}


// GAMEBOARD CLASS
class GameBoard {

  // put vertices array here
  constructor (nodes) {
    this.nodes = [...nodes]; // ES6 spread operator
  }

  addToGraph(node) {
    this.nodes.push(node);
  }
}






// specifically for a knight
//LEVEL ORDER FIND SHORTEST PATH
const knightMoves = function(array1, array2) {
  console.log('Running knightMoves function');

  //find which node matches the array
  currentNode =  vertices.find(item => item.locationArray[0] === array1[0] && item.locationArray[1] === array1[1]);
  console.log(currentNode);
  endingNode = vertices.find(item => item.locationArray[0] === array2[0] && item.locationArray[1] === array2[1]);
  console.log(endingNode);

  let visited = [];
  let queue = [];
  queue.push(currentNode);

  // while the queue has anything in it
  while (queue.length > 0) {
    console.log('queue[0]:');
    console.log(queue[0]);

      // BASE CASE
      // if the first thing in the queue is adjacent to endingNode
      if (queue[0].edgesList.includes(endingNode)) {
        // push that to done
        // push ending node to done
        console.log('Base case!');
        visited.push(queue.shift());  
        visited.push(endingNode);
        let moves = visited.map(node => node.locationArray);
        console.log(`Destination reached in ${moves.length - 1} moves! Here's your path:`)
        return moves;
      // otherwise, enqueue children
      } else {
        // for every node in current node's adjacency list
        for (let i = 0; i < queue[0].edgesList.length; i++) {
          
          // if edgeList[i] has not been visited
          if (!visited.includes(queue[0].edgesList[i])){
            // push them to the queue
          queue.push(queue[0].edgesList[i]);
          } else {
            console.log('This has been visited.');
          }        
        }
        // push current node out of queue into done array
        console.log('About to push first in queue to visited')
        visited.push(queue.shift());    
      }
  }
}
