const { Positionable } = require('./classes.js');

class Rupee {
  constructor(x, y) {
    this.positionComponent = new Positionable(x, y)
  }

  getPos() {
    return this.positionComponent.getPos()
  }
  
}

module.exports = Rupee;
