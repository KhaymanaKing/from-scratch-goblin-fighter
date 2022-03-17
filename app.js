// import functions and grab DOM elements
import { renderMonster } from './render-utils.js';


const form = document.querySelector('form');
const monstersEl = document.querySelector('.monster-list');
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
    const data = new FormData(form);
    const monsterName = data.get('monster-name');

    const newMonster = {
        id: currentId,
        name: monsterName,
        hp: Math.ceil(Math.random() * 100),
    };
    
    currentId++;
    monsters.push(newMonster);
    showMonsters();
    console.log(newMonster);
});

function monsterClicker(monsterData){
    if (monsterData.hp <= 0) return;
    if (Math.random () < 0.6){
        monsterData.hp - Math.random * 10;
        alert('You smacked' + monsterData.name);
    } else {
        alert('YOU MISSED');
    }
    if (Math.random() < 0.45){
        monsterData.hp - 2;
        alert(monsterData.name + ' smacked ya');
    } else { 
        alert(monsterData.name + 'MISSED!');
    }
    if (monsterData.hp === 0){
        xp++;
    }
    
    hitpointsEl.textContent = hp;
    experienceEl.textContent = xp;
    const monsterhpEl = document.getElementById(`monster-hp${monsterData.id}`);
    monsterhpEl.textContent = monsterData.hp; 

}

function showMonsters(){
    monstersEl.textContent = '';

    for (let monster of monsters){
        const monstersEl = renderMonster(monster);
        monstersEl.addEventListener('click', () => {
            monsterClicker(monster);
        });
    }

}

showMonsters();
