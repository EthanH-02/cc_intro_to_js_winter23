const { MAP_X, MAP_Y } = require('../constants.js');

// Class dedicated to anything that has an x, y co-ordinate
class Positionable {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Returns the x and y value of the current value
  getPos() {
    return [this.x, this.y];
  }

  // Returns a boolean statement of whether x and y are on the map
  isInBounds(x, y) {
    return 0 <= x && x < MAP_X && 0 <= y && y < MAP_Y;
  }
}


// Child class to positionable, allowing the position to be changed
class Movable extends Positionable {
  constructor(x, y) {
    super(x, y);
  }

  // Increments the position of the item by x, y, returns true if
  // successful otherwise returns false
  updatePos(x, y) {
    if (this.isInBounds(this.x + x, this.y + y)) {
      this.x += x;
      this.y += y;
      return true;
    }
    return false;
  }

  // Changes the position to x, y returns true if successful
  // otherwise returns false
  hardPosChange(x, y) {
    if (this.isInBounds(x, y)) {
      this.x = x;
      this.y = y;
      return true;
    }
    return false;
  }
}

module.exports = { Movable, Positionable };
