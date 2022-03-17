export function renderMonster(monsterData) {
    const monstersEl = document.createElement('div');
    const monsternameEl = document.createElement('p');
    const monsterhpEl = document.createElement('p');
    

    monstersEl.classList.add('monster');

    monsternameEl.textContent = monsterData.name;
    monsterhpEl.id = `monster-hp-${monsterData.id}`;
    monsterhpEl.textContent = monsterData.hp < 0 ? 0 : monsterData.hp;
    if (monsterData.hp < 0){
        monstersEl.classList.add('defeated');
    }

    monstersEl.append (monsternameEl, monsterhpEl);
    return monstersEl;
}