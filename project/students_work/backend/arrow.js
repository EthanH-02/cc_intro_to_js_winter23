const { Movable } = require('./classes.js');
const { MAP_X, MAP_Y } = require('../constants.js')


// Creates a series of icons to be used for the map
const icon = Object.freeze({
    UP: '↑',
    DOWN: '↓',
    LEFT: '←',
    RIGHT: '→',
});


// Creates a class for the arrow
class Arrow {

  // The constructor is based from the positioning and direction of Link
  constructor(link) {
    const [x, y] = link.getPos();
    switch(link.getIcon()) {
        case '^':
            this.icon = icon.UP
            this.moveComponent = new Movable(x, y - 1)
            break
        case 'v':
            this.icon = icon.DOWN
            this.moveComponent = new Movable(x, y + 1)
            break
        case '<':
            this.icon = icon.LEFT
            this.moveComponent = new Movable(x - 1, y)
            break
        case '>':
            this.icon = icon.RIGHT
            this.moveComponent = new Movable(x + 1, y)
            break 
    }
    
    // Go into Link's inventory of arrows and reduce by one
    link.useArrow()
  }

  // Returns the current icon symbol 
  getIcon() {
    return this.icon
  }

  // Returns the current 
  getPos() {
    return this.moveComponent.getPos();
  }

  // On each turn the arrow moves one over in the direction it is pointing
  // Returns false if the arrow moves off the board otherwise returns true
  moveArrow() {
    const [x, y] = this.moveComponent.getPos();
  
    // If the arrow is currently on the edge of the board return false
    if (
      (this.icon === icon.UP && y === 0) ||
      (this.icon === icon.DOWN && y === MAP_Y - 1) ||
      (this.icon === icon.LEFT && x === 0) ||
      (this.icon === icon.RIGHT && x === MAP_X - 1)
    ) {
      return false;
    }
  
    // Move the arrow based on the current position of the icon
    switch (this.icon) {
      case icon.UP:
        this.moveComponent.updatePos(0, -1);
        break;
      case icon.DOWN:
        this.moveComponent.updatePos(0, 1);
        break;
      case icon.LEFT:
        this.moveComponent.updatePos(-1, 0);
        break;
      case icon.RIGHT:
        this.moveComponent.updatePos(1, 0);
        break;
    }
  
    return true;
  }
}

module.exports = Arrow;
