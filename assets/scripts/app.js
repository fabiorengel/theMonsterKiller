const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 12;
const STRONG_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;


let chosenMaxLife = 15;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;
  if (mode ==='ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage  = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ) {
    alert('you won');
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0 ) {
    alert('you lost');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0 ) { 
    alert('both losers');
  }
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
  increasePlayerHealth(HEAL_VALUE)
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler);