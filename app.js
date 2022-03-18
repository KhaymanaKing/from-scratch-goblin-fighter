// import functions and grab DOM elements
import { renderMonster } from './render-utils.js';


const form = document.querySelector('form');
const monstersListEl = document.querySelector('.monster-list');
const hitpointsEl = document.querySelector('#player-hp');
const experienceEl = document.querySelector('#experience');


// let state
let playerHp = 5;
let xp = 0;
let monsters = [
    { name: 'Glurp', hp: 1 },
    { name: 'Terry', hp: 30 },
];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const monsterName = data.get('monster-name');

    const newMonster = {
        name: monsterName,
        hp: Math.ceil(Math.random() * 100),
    };
    
    
    monsters.push(newMonster);
    showMonsters();
});



function showMonsters(){
    monstersListEl.textContent = '';

    for (let monster of monsters){
        
        const monsterEl = renderMonster(monster);

        if (monster.hp > 0) {
            monsterEl.addEventListener('click', () => {
                if (Math.random () < .6){
                    monster.hp--;
                    playerHp++;
                    alert('You smacked ' + monster.name);
                } else {
                    alert('YOU MISSED');
                }
                if (Math.random() < 0.45){
                    playerHp --;
                    alert(monster.name + ' smacked ya');
                } else { 
                    alert(monster.name + ' MISSED!');
                }
                if (monster.hp === 0){
                    xp++;
                }
                if (playerHp === 0){
                    alert('YOU LOSE');
                }
                hitpointsEl.textContent = playerHp;
                experienceEl.textContent = xp;

                showMonsters();
            });
        }
        monstersListEl.append(monsterEl);
      
    }
}
showMonsters();
