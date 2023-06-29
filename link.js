const { MAP_X, MAP_Y } = require('../constants.js')
const { Movable } = require('./classes.js');
const { movingLink, wrapper } = require('../work.js')

const icon = Object.freeze({
  UP: '^',
  DOWN: 'v',
  LEFT: '<',
  RIGHT: '>',
});

class Link {

    // Constructor to be used for link given his x, y coordinates and max HP
    constructor(x, y, hp, hero_of) {
        this.icon = icon.UP;
        this.currHp = hp
        this.maxHp = hp
        this.hero_of = hero_of
        this.wallet = 0;
        this.arrows = 0;
        this.attacking = false;
        this.shooting = false;
        this.moveComponent = new Movable(x, y);
    }

    // Return a boolean statement on whether link is dead or not
    isDead() {
        return this.currHp <= 0
    }

    // Get the position one ahead of where Link is on the board
    getAhead() {
        const [x, y] = this.moveComponent.getPos();
        switch (this.icon) {
            case icon.UP:
                return [x, y - 1];
            case icon.LEFT:
                return [x - 1, y];
            case icon.DOWN:
                return [x, y + 1];
            case icon.RIGHT:
                return [x + 1, y];
        }
        return [x, y];
    }
    
    // Determine which sword icon to display based on Link's direction
    getSword() {
        switch(this.icon) {
            case icon.UP:
                return '⊥'
            case icon.DOWN:
                return 'T'
            case icon.LEFT:
                return '⊣'
            case icon.RIGHT:
                return '⊢'
        }
        return ''
    }

    // Based from the user input decide upon what to do in each turn
    moveInterp(userInput) {

        const [x, y] = this.getPos()
        let nx = x, ny = y

        // Set the attacking and shooting values to false
        this.attacking = false;
        this.shooting = false;

        // Switch case based off user input
        switch (userInput.toLowerCase()) {
            case 'w':
                this.icon = icon.UP;
                [nx, ny] = movingLink(x, y, 0, -1)
                break;
            case 'a':
                this.icon = icon.LEFT;
                [nx, ny] = movingLink(x, y, -1, 0)
                break;
            case 's':
                this.icon = icon.DOWN;
                [nx, ny] = movingLink(x, y, 0, 1)
                break;
            case 'd':
                this.icon = icon.RIGHT;
                [nx, ny] = movingLink(x, y, 1, 0)
                break;
            case 'i':
                this.icon = icon.UP;
                break;
            case 'k':
                this.icon = icon.DOWN;
                break;
            case 'j':
                this.icon = icon.LEFT;
                break;
            case 'l':
                this.icon = icon.RIGHT;
                break;
            case 'q':
                this.attacking = true;
                break;
            case 'e':
                this.shooting = wrapper(this.arrows)
                break;
            // Allows the user to type exit to break the program
            case 'exit':
                throw new Error('Program terminated');
            default:
                console.log('INPUT INVALID');
        }

        this.moveComponent.hardPosChange(nx, ny)
    }

  getIcon() {
    return this.icon;
  }

  getPos() {
    return this.moveComponent.getPos();
  }

  isAttacking() {
    return this.attacking;
  }

  isShooting() {
    return this.shooting;
  }

  takeDamage() {
    this.currHp --;
  }

  getHeartString() {
    let heartString = `The Hero of ${this.hero_of}:`;

    for (let i = 0; i < this.currHp; i++) {
      heartString += ' ❤︎';
    }

    for (let i = 0; i < this.maxHp - this.currHp; i++) {
        heartString += ' ♡'
    }

    return heartString;
  }

  getWallet() {
    return this.wallet;
  }

  incrementWallet() {
    this.wallet ++
  }

  getArrows() {
    return this.arrows;
  }
  
  incrementArrow() {
    this.arrows ++;
  }

  useArrow() {
    this.arrows --;
  }


  // Function that returns a random position on the board given that it is not Link's current position
  getNonLinkPos() {

    var x, y
    do {
      x = Math.floor(Math.random() * MAP_X)

    } while (x === this.getPos()[0])
    do {
      y = Math.floor(Math.random() * MAP_Y)
    } while (y === this.getPos()[1])
    return [x, y]
  }
}

module.exports = Link;
