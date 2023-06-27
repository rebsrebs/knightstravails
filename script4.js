// Array to store all of the locations
const vertices = [];

// makeVertices - initializes 64 nodes - one for each square of 8x8 chessboard - each with a locationArray and pushes them into the vertices array.
const makeVertices = function() {
  console.log('running makeVertices');
  for (let x = 1; x < 9; x++) {
    for (let y = 1; y < 9; y++) {
      const vertex = new Node([x,y]);
      vertices.push(vertex);
    }
  }
  return vertices;
}

// Utility function to check if node's are already in each other's adjacency lists before pushing them
const pushToEachOther = function(node, newX, newY) {
  console.log('running pushToEachOther:');
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

// Specifically for a knight - utility function to find all adjacent nodes to the given node and put them in that node's edgeList
const connect = function(node) {
  console.log('running connect');
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
// End connect function

// Connect all board locations from vertices array by filling out adjacency lsits
const makeConnections = function() {
  console.log('running make Connections');
  vertices.forEach(connect);
}

//NODE CLASS
class Node {
  constructor(locationArray) {
  this.locationArray = locationArray;
  this.x = this.locationArray[0];
  this.y = this.locationArray[1];
  this.edgesList = [];
  }
}
//END NODE CLASS


// GAMEBOARD CLASS
class GameBoard {
  // put vertices array here
  constructor (nodes) {
    this.nodes = [...nodes]; // ES6 spread operator
  }
}


class Knight {
  constructor(array) {
    this.currentLocation = array;
  }

  //Methods
  knightMoves (destination) {
    console.log('Running knightMoves function');

    //find which node matches the array
    let currentNode =  vertices.find(item => item.locationArray[0] === this.currentLocation[0] && item.locationArray[1] === this.currentLocation[1]);
    let endingNode = vertices.find(item => item.locationArray[0] === destination[0] && item.locationArray[1] === destination[1]);

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
}
// end knight class

makeVertices();
makeConnections();
let chessBoard = new GameBoard(vertices);
let theKnight = new Knight([1,1]);
console.log('theKnight.currentLocation:')
console.log(theKnight.currentLocation);
