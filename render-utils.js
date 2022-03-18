export function renderMonster(monsterData) {
    const monsterEl = document.createElement('div');
    const monsternameEl = document.createElement('p');
    const monsterhpEl = document.createElement('p');
    

    monsterEl.classList.add('monster');

    monsternameEl.textContent = monsterData.name;
    monsterhpEl.textContent = monsterData.hp;

    if (monsterData.hp < 0) {
        monsterEl.classList.add('defeated');
    }

    monsterEl.append(monsternameEl, monsterhpEl);
    return monsterEl;
}