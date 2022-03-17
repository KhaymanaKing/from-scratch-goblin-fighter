// import functions and grab DOM elements
const form = document.querySelector('#form');
const monstersEl = document.querySelector('#form');
const hitpointsEl = document.querySelector('#player-hp');
const experienceEl = document.querySelector('#experience');

// let state
let hp = 0;
let xp = 0;
let monsters = [
    { id: 1, name: 'Glurp', hp: 15 },
    { id: 2, name: 'Terry', hp: 30 },
];

let currentId = 3;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
