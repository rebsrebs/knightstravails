
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




const Knight = class {

  constructor() {
    this.position = [0,0];
  }

  //methods
  knightMoves(array1,array2){
    // find shortest path between two positions
  }
}