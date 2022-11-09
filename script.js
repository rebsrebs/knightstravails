
const gameBoard = class {

  constructor() {
    this.array = [];

    for (let x = 1; x < 9; x++) {
      for (let y = 1; y < 9; y++) {
        // create position node
        const square = positionFactory([x,y]);
        // variables
        let xP2 = parseFloat(position.x) + 2;
        let xM2 = parseFloat(position.x) - 2;
        let xP1 = parseFloat(position.x) + 1;
        let xM1 = parseFloat(position.x) - 1;
        let yP2 = parseFloat(position.y) + 2;
        let yM2 = parseFloat(position.y) - 2;
        let yP1 = parseFloat(position.y) + 1;
        let yM1 = parseFloat(position.y) - 1;

        //forwardRight
        if ((0 < xP1 < 9) && (0 < yP2 < 9)) {
          square.forwardRight = [xP1, yP2];
        }
        gameBoardArray.push(square);
      }
    }
    console.log(gameBoardArray);
  }
}


const positionFactory = (array) => {
  console.log('running positionFactory with array:')
  console.log(array);
  let x = array[0];
  let y = array[1];
  let parent = null;
  let forwardRight = null;
  let forwardLeft = null;
  let rightForward = null;
  let rightBackward = null;
  let leftForward = null;
  let leftBackward = null;
  let backwardRight = null;
  let backwardLeft = null;
  return {x,y,forwardRight,forwardLeft,rightForward,rightBackward,leftForward,leftBackward,backwardRight,backwardLeft};
}

const Tree = class {

  constructor(array) {
    console.log('creating tree');
    this.array = array;
    this.root = positionFactory(array);
  }


// This works
testBuildTree(position = this.root) {
  if (0 < (position.x + 2) < 9){
  console.log(position);
  console.log(`position.x is ${position.x}`);
  console.log(`position.x + 2 is ${position.x + 2}`);
  let newArray = [position.x +2, position.y+1];
  console.log(newArray)
  position.rightForward = positionFactory(newArray);
  console.log(position);
  }
}

// takes a position object as parameter
  buildTree(destination, position, beenThere = []) {
    console.log(position);

    if (position.x === destination.x && position.y === destination.y) {
      console.log('Done!')
      return beenThere;
    } else {

    beenThere.push(position);

    let xP2 = parseFloat(position.x) + 2;
    let xM2 = parseFloat(position.x) - 2;
    let xP1 = parseFloat(position.x) + 1;
    let xM1 = parseFloat(position.x) - 1;
    let yP2 = parseFloat(position.y) + 2;
    let yM2 = parseFloat(position.y) - 2;
    let yP1 = parseFloat(position.y) + 1;
    let yM1 = parseFloat(position.y) - 1;

    //RIGHT
    if (0 < xP2 && xP2 < 9){
      // Right Forward
      if (0 < yP1 && yP1 < 9) { 
        if (isAlreadyInArray(beenThere, [xP2, yP1])) {
          return 'Been there!';
        } else {
          position.rightForward = this.buildTree(destination, positionFactory([xP2, yP1]), beenThere);
        }
      } else {
        return null;
      }
      // Right Backward
      if (0 < yM1 < 9) {
        if (isAlreadyInArray(beenThere, [xP2, yM1])) {
          return 'Been there!';
        } else {
        position.rightBackward = this.buildTree(destination, positionFactory([xP2, yM1]), beenThere);
      }} else {
        return null;
      }
    } else {
      return null;
    };

    //LEFT
    if (0 < xM2 < 9){
      // Left Forward
      if (0 < yP1 < 9) {
        if (isAlreadyInArray(beenThere, [xM2, yP1])) {
          return 'Been there!';
        } else {
        position.leftForward = this.buildTree(destination, positionFactory([xM2, yP1]), beenThere);
      }} else {
        return null;
      }
      // Left Backward
      if (0 < yM1 < 9) {
        if (isAlreadyInArray(beenThere, [xM2, yM1])) {
          return 'Been there!';
        } else {
        position.leftBackward = this.buildTree(destination, positionFactory([xM2, yM1]), beenThere);
      }} else {
        return null;
      }
    } else {
      return null;
    };

    //FORWARD
    if (0 < yP2 < 9){
      // Forward Right
      if (0 < xP1 < 9) {
        if (isAlreadyInArray(beenThere, [yP2, xP1])) {
          return 'Been there!';
        } else {
        position.forwardRight = this.buildTree(destination, positionFactory([yP2, xP1]), beenThere);
      }} else {
        return null;
      }
      // Forward Left
      if (0 < xM1 < 9) {
        if (isAlreadyInArray(beenThere, [yP2, xM1])) {
          return 'Been there!';
        } else {
        position.forwardLeft = this.buildTree(destination, positionFactory([yP2, xM1]), beenThere);
      }} else {
        return null;
      }
    } else {
      return null;
    };

    //BACKWARD
    if (0 < yM2 < 9){
      // Backward Right
      if (0 < xP1 < 9) {
        if (isAlreadyInArray(beenThere, [yM2, xP1])) {
          return 'Been there!';
        } else {
        position.backwardRight = this.buildTree(destination, positionFactory([yM2, xP1]), beenThere);
      }} else {
        return null;
      }
      // Backward Left
      if (0 < xM1 < 9) {
        if (isAlreadyInArray(beenThere, [yM2, xM1])) {
          return 'Been there!';
        } else {
        position.backwardLeft = this.buildTree(destination, positionFactory([yM2, xM1]), beenThere);
      }} else {
        return null;
      }
    } else {
      return null;
    };

    return position;
  }
  }





  findShortestRoute(position,destination) {

  }



  




}
















// POSITION FACTORY FUNCTION
// const positionFactory = (array) => {
//   let x = array[0];
//   let y = array[1];
  
//   moveForwardRight() {
//     if (0 < (this.x + 1) < 9){
//       if (0 < (this.y + 2) < 9) {
//         return positionFactory([this.x + 1, this.y + 2])
//       } else {
//         return null;
//       }
//     } else {
//       return null;
//     };
//   }

//   return { array, x, y };
// };



const knightMoves2 = function(startPosition = positionFactory(start), endPosition = positionFactory(end)) {

  // if start and end position are the same
  if (startPosition.x === endPosition.x && startPosition.y === endPosition.y) {
    console.log ('We have a match.');
  }

  if (0 < (startPosition.x + 2) < 9) {
    if (0 < (startPosition.y + 1) < 9) {
      let newArray = [startPosition.x + 2, startPosition.y + 1]
      let newPosition = positionFactory(newArray);
      startPosition.possibleMoves.push(newPosition);
      knightMoves2(newPosition, end)
    }
  }




}














// Make a tree of possibilities
// If a possible move is ever equal to the root i.e. the starting position, return.
const movesTree = function(position) {

  let x = position[0];
  let y = position[1];

  //forward
  if (y+2 > 0 && y+2 < 9) {
    //right
    if (x+1 > 0 && x+1 < 9) {
      node.possibleMoves.push([y+2, x+1]);
    }
    //left
    if (x-1 > 0 && x-1 < 9) {
      node.possibleMoves.push([y+2, x-1]);
    }
  }
}


const testFunction = function(array1 = [1,1],array2 = [4,4],possibleMovesArray=[]){
  possibleMovesArray.push(array1);
  possibleMovesArray.push(array2);
  return possibleMovesArray;
}


const isAlreadyInArray = function(array1, array2) {
  console.log('running isAlreadyInArray');
  for (let i = 0; i < array1.length; i++) {
    if (array1[i][0] === array2[0] && array1[i][1] === array2[1]){
      console.log('We have already been here.');
      return true;
    }
  }
  return false;
}












const knightMoves = function(array1 = [1,1], array2 = [4,4], possibleMovesArray = [array1], count = 0){
  console.log(`running knightmoves and array1 is ${array1} and array2 is ${array2}`);

  console.log(`possibleMovesArray:`);
  console.log(possibleMovesArray)

  // starting position
  let x = array1[0];
  let y = array1[1];

  // possible move
  let a = array2[0];
  let b = array2[1];

  // base case
  if (x === a && y === b) {
    console.log('They match');
    console.log('PossibleMovesArray:')
    console.log(possibleMovesArray);
    console.log('Count:')
    return count;
  }
  
  //forward
  if (y+2 > 0 && y+2 < 9) {
    //right
    if (x+1 > 0 && x+1 < 9) {
      console.log('forward right');
      let newArray1 = [(x+1),(y+2)];
      if (isAlreadyInArray(possibleMovesArray, newArray1)) {
        console.log('Already in there.')
      } else {
      count++
      possibleMovesArray.push(newArray1);
      knightMoves(newArray1, array2, possibleMovesArray, count);
      }
    }
    //left
    if (x-1 > 0 && x-1 < 9) {
      console.log('forward left');
      let newArray1 = [(x-1),(y+2)];
      if (isAlreadyInArray(possibleMovesArray, newArray1)) {
        console.log('Already in there.')
      } else {
        count++
      possibleMovesArray.push(newArray1);
      knightMoves(newArray1, array2, possibleMovesArray, count);
    }}
  }

  //backward
  if (y-2 > 0 && y-2 < 9) {
    //right
    if (x+1 > 0 && x+1 < 9) {
      console.log('backward right');
      let newArray1 =[x+1,y-2];
      if (isAlreadyInArray(possibleMovesArray, newArray1)) {
        console.log('Already in there.')
      } else {
        count++
        possibleMovesArray.push(newArray1);
      knightMoves(newArray1, array2, possibleMovesArray, count);
    }}
    //left
    if (x-1 > 0 && x-1 < 9) {
      console.log('backward left');
      let newArray1 =[x-1,y-2];
      if (isAlreadyInArray(possibleMovesArray, newArray1)) {
        console.log('Already in there.')
      } else {
        count++
        possibleMovesArray.push(newArray1);
      knightMoves(newArray1, array2, possibleMovesArray, count);
    }}
  }

  //right
  if (x+2 > 0 && x+2 < 9) {
    //forward
    if (y+1 > 0 && y+1 <9){
      console.log('right forward');
      let newArray1 =[x+2,y+1];
      if (isAlreadyInArray(possibleMovesArray, newArray1)) {
        console.log('Already in there.')
      } else {
        count++
        possibleMovesArray.push(newArray1);
      knightMoves(newArray1, array2, possibleMovesArray, count);
    }}
    //backward
    if (y-1 > 0 && y-1 <9){
      console.log('right backward');
      let newArray1 = [x+2,y-1];
      if (isAlreadyInArray(possibleMovesArray, newArray1)) {
        console.log('Already in there.')
      } else {
        count++
        possibleMovesArray.push(newArray1);
      knightMoves(newArray1, array2, possibleMovesArray, count);
    }}
  }

  //left
  if (x-2 > 0 && x-2 < 9) {
    //forward
    if (y+1 > 0 && y+1 <9){
      console.log('left forward');
      let newArray1 = [x-2,y+1];
      if (isAlreadyInArray(possibleMovesArray, newArray1)) {
        console.log('Already in there.')
      } else {
        count++
        possibleMovesArray.push(newArray1);
      knightMoves(newArray1, array2, possibleMovesArray, count);
    }}
    //backward
    if (y-1 > 0 && y-1 <9){
      console.log('left backward');
      let newArray1 = [x-2,y-1];
      if (isAlreadyInArray(possibleMovesArray, newArray1)) {
        console.log('Already in there.')
      } else {
        count++
      possibleMovesArray.push(newArray1);
      knightMoves(newArray1, array2, possibleMovesArray, count);
    }}
  }
  return;
}




const Knight = class {

  constructor() {
    this.position = [0,0];
  }

  //methods
  knightMoves(array1,array2){
    // find shortest path between two positions
  }
}

const TheTree = new Tree([1,1]);