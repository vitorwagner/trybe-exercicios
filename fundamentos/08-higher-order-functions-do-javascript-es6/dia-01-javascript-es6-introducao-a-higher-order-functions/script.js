// Ex1
const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(employeeGenerator));

// Ex2
const numberChecker = (myNumber, number) => myNumber === number;
const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};
console.log(lotteryResult(2, numberChecker));

// Ex3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};
const countPoints = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} pontos`;
};
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// Bonus
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonDmg;
};

const warriorAttack = () => {
  const minDmg = warrior.strength;
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const warriorDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
  return warriorDmg;
};

const mageAttack = () => {
  let turnStats = { manaSpent: 0, damageDealt: 'Não possui mana suficiente.' };

  if (mage.mana >= 15) {
    const minDmg = mage.intelligence;
    const maxDmg = mage.intelligence * 2;
    const mageDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    turnStats = { manaSpent: 15, damageDealt: mageDmg };
  }
  return turnStats;
};

const gameActions = {
  mageTurn(attack) {
    const manaConsumed = attack(mage).manaSpent;
    const mageDamage = attack(mage).damageDealt;
    mage.mana -= manaConsumed;
    mage.damage = mageDamage;
    dragon.healthPoints -= mageDamage;
  },
  warriorTurn(attack) {
    const warriorDamage = attack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  dragonTurn(attack) {
    const dragonDamage = attack(dragon);
    dragon.damage = dragonDamage;
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
  },
  turnResults: battleMembers,
};

gameActions.mageTurn(mageAttack);
gameActions.warriorTurn(warriorAttack);
gameActions.dragonTurn(dragonAttack);

console.log(gameActions.turnResults);