// import functions and grab DOM elements
import { renderMonster } from "./render-utils";


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
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const monsterName = data.get('monster-name');

    const newMonster = {
        id: currentId,
        name: monsterName,
        hp: Math.ceil(Math.random() * 100),
    };
    currentId++;
    monsters.push(newMonster);
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
