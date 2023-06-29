const prompt = require('prompt-sync')();
const { mapFormer } = require('./print_map.js')
const { printMap } = require('./print.js')
const Rupee = require('./rupee.js')
const Octorok = require('./octorok.js')
const Arrow = require('./arrow.js')
const { MAP_X, MAP_Y, OCTOROK_TICK, OCTOROK_SPAWN, RUPEE_SPAWN, ARROW_SPAWN } = require('../constants.js')
const { hasCollision } = require('../tasks.js')



/*  Recursively asks a prompt until 'Y' or 'N' are entered.
    From here then return true if entered 'Y' or false if
    entered 'N'.
    NOTE: it is not case sensitive
*/
function loopBoolQuestion(prompt_str) {
    const rsp = prompt(prompt_str)
    if (rsp.toLowerCase() == 'y') {
        return true
    } else if (rsp.toLowerCase() == 'n') {
        return false
    } else {
        console.log('Invalid input please enter Y or N')
        return loopBoolQuestion(prompt_str)
    }
}


/*  Function that spawns in new Octoroks and Rupees
    This is all based off the previously implemented
    constants for the spawn rate
*/
function spawner(link, octoroks, rupees) {
    
    let [x, y] = link.getNonLinkPos()
    if (Math.random() < (OCTOROK_SPAWN / 100)) {
        octoroks.push(new Octorok(x, y, 20))
    }

    [x, y] = link.getNonLinkPos()
    if (Math.random() < (RUPEE_SPAWN / 100)) {
        rupees.push(new Rupee(x, y))
    }
}

function tick(i, link, octoroks, rupees, arrows) {
    if (Math.random() < (ARROW_SPAWN / 100)) {
      link.incrementArrow();
    }
  
    if (link.isShooting()) {
      arrows.push(new Arrow(link));
    }
  
    rupees.forEach((rupee, rupeeIdx) => {
      const [rupeeX, rupeeY] = rupee.getPos();
      const [linkX, linkY] = link.getPos();
  
      if (hasCollision(rupeeX, rupeeY, linkX, linkY)) {
        rupees.splice(rupeeIdx, 1);
        link.incrementWallet();
      }
    });
  
    printMap(link, mapFormer(link, octoroks, rupees, arrows));
  
    const dirInp = prompt();
    link.moveInterp(dirInp);
  
    octoroks.forEach((octorok, octorokIdx) => {
      if (i % OCTOROK_TICK === 0) {
        octorok.decideMovement();
      }
  
      const [octorokX, octorokY] = octorok.getPos();
      const [linkX, linkY] = link.getPos();
  
      if (hasCollision(octorokX, octorokY, linkX, linkY)) {
        link.takeDamage();
      }
  
      arrows.forEach((arrow, arrowIdx) => {
        const [arrowX, arrowY] = arrow.getPos();
  
        if (hasCollision(octorokX, octorokY, arrowX, arrowY)) {
          octoroks.splice(octorokIdx, 1);
        }
      });
  
      const [linkAX, linkAY] = link.getAhead();

      if (link.isAttacking() && hasCollision(octorokX, octorokY, linkAX, linkAY)) {
        octoroks.splice(octorokIdx, 1);
      }
    });
  
    arrows.forEach((arrow, arrowIdx) => {
      if (!arrow.moveArrow()) {
        arrows.splice(arrowIdx, 1);
      }
    });
  
    spawner(link, octoroks, rupees);
  }
  

module.exports = {
    loopBoolQuestion,
    tick,
    spawner
}