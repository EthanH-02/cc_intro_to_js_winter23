const { Movable } = require('./classes.js');

class Octorok {
  constructor(x, y) {
    this.moveComponent = new Movable(x, y);
  }

  decideMovement() {
    const directions = [
      [-1, -1], [0, -1], [1, -1], [1, 0],
      [1, 1], [0, 1], [-1, 1], [-1, 0]
    ];
    const randomIndex = Math.floor(Math.random() * directions.length);
    const [dx, dy] = directions[randomIndex];
    if (!this.moveComponent.updatePos(dx, dy)) {
      this.decideMovement();
    }
  }

  getPos() {
    return this.moveComponent.getPos();
  }
}

module.exports = Octorok;
