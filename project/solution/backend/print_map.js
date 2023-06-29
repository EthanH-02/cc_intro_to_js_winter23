const Link = require('./link.js');
const { MAP_X, MAP_Y } = require('../constants.js')

function mapFormer(link, octoroks, rupees, arrows) {
  const map = Array.from({ length: MAP_Y }, () => Array(MAP_X).fill('.'));

  const [x, y] = link.getPos();
  const [sx, sy] = link.getAhead();

  map[y][x] = link.getIcon();
  
  for (octorok of octoroks) {
    const [ox, oy] = octorok.getPos();
    map[oy][ox] = '@';
  }

  for (rupee of rupees) {
    const [rx, ry] = rupee.getPos()
    map[ry][rx] = '⟐'
  }

  for (arrow of arrows) {
    const [ax, ay] = arrow.getPos()
    map[ay][ax] = arrow.getIcon()
  }

  if (0 <= sx && sx < MAP_X && 0 <= sy && sy < MAP_Y && link.isAttacking()) {
    map[sy][sx] = link.getSword();
  }

  return map;
}

module.exports = { mapFormer, MAP_X, MAP_Y };
