
const createBoard = function() {
  let gameBoardArray = [];
  for (let x = 1; x < 9; x++) {
    for (let y = 1; y < 9; y++) {
      const square = [x,y];
      gameBoardArray.push(square);
    }
  }
  console.log(gameBoardArray);
}