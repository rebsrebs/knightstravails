
const gameBoard = class {

  constructor() {
    this.array = [];

    for (let x = 1; x < 9; x++) {
      for (let y = 1; y < 9; y++) {
        const square = [x,y];
        gameBoardArray.push(square);
      }
    }
    console.log(gameBoardArray);
  }
}


// NODE FACTORY FUNCTION
const position = (array) => {
  let x = array[0];
  let y = array[1];
  let possibleMoves = [];
  return { array, x, y, possibleMoves };
};


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
  for (let i = 0; i < array1.length; i++) {
    if (array1[i][0] === array2[0] && array1[i][1] === array2[1]){
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