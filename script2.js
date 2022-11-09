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
  return {x,y,parent,forwardRight,forwardLeft,rightForward,rightBackward,leftForward,leftBackward,backwardRight,backwardLeft};
}


const Tree = class {

  constructor(array) {
    console.log('creating tree');
    this.array = array;
    this.root = positionFactory(array);
  }




// just build the tree
buildTree(position) {

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
          let newPosition = positionFactory[xP2, yP1];
          newPosition.parent = position;
          position.rightForward = this.buildTree(positionFactory([xP2, yP1]));
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