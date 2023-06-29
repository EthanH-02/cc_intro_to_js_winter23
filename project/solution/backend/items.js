const { Damagable, Movable } = require('./classes.js');

class Shield {
  constructor(hp, x, y) {
    this.hp = hp;
    this.moveComponent = new Movable(x, y);
  }

  getPos() {
    return this.moveComponent.getPos();
  }

  changePos(link) {
    const [x, y] = link.getPos();
    const dir = link.getDir();
    switch (dir) {
      case '^':
        this.moveComponent.hardPosChange(x, y - 1);
        break;
      case 'v':
        this.moveComponent.hardPosChange(x, y + 1);
        break;
      case '<':
        this.moveComponent.hardPosChange(x - 1, y);
        break;
      case '>':
        this.moveComponent.hardPosChange(x + 1, y);
        break;
    }
  }
}

class Sword {
  constructor(dmg) {
    this.dmg = dmg;
  }

  getDmg() {
    return this.dmg;
  }
}

module.exports = { Sword, Shield };
