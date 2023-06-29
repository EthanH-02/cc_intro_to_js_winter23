/*  YOU MAY WISH TO PLAY WITH THESE AS THEY WILL CHANGE
    YOUR BOARD CAN BE USEFUL FOR TESTING    */

// Size of the map
const MAP_X = 10;
const MAP_Y = 10;

// How many hits Link can take before dying
const LINK_HP = 3;

// How many Octoroks the map starts with
const OCTOROK_START = 3;

// How many inputs before an Octorok moves
const OCTOROK_TICK = 3;

// How frequently an Octorok spawns on a turn as a %
const OCTOROK_SPAWN = 05;

// How frequently a Rupee spawns on a turn as a %
const RUPEE_SPAWN = 10;

// How frequently an arrow spawns given as a %
const ARROW_SPAWN = 10;

module.exports = {
    MAP_X, MAP_Y,
    LINK_HP,
    OCTOROK_START, OCTOROK_TICK, OCTOROK_SPAWN,
    RUPEE_SPAWN,
    ARROW_SPAWN
}