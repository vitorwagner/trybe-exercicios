// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let sum = 0;
for (let index = 1; index <= 50; index += 1) {
  sum += index
}
console.log('A some total de 1 a 50 é ' + sum)

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let count = 0;
for (let index = 2; index <= 150; index += 1) {
  if (index % 3 === 0) {
    count += 1
  }
}
if (count === 50) {
  console.log("Mensagem secreta")
} else {console.log(count)}
// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
// Referência: https://betterprogramming.pub/7-ways-to-code-rock-paper-scissors-in-javascript-4189a5e7e535
let player1 = "rock";
let player2 = "scissors";
let result = null;
switch (player1 + player2) {
  case "rockscissors":
  case "scissorspaper":
  case "paperrock":
    result = "Player 1 won";
    break;
  case "scissorsrock":
  case "paperscissors":
  case "rockpaper":
    result = "Player 2 won";
    break;
  case "paperpaper":
  case "scissorsscissors":
  case "rockrock":
    result = "Empate";
    break;
    default:
      console.log('Erro')
}
console.log(result)

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let age = 18
age >= 18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa é menor de idade")

// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarolzita = 20
let idadeMurilo = 20
let idadeBaeta = 26

if (idadeCarolzita === idadeBaeta && idadeCarolzita === idadeMurilo) {
  console.log("Os três tem a mesma idade")
} else if (idadeCarolzita < idadeBaeta && idadeCarolzita < idadeMurilo) {
  console.log("Carolzita é a mais nova")
} else if (idadeBaeta < idadeCarolzita && idadeBaeta < idadeMurilo) {
  console.log("Baêta é a mais nova")
} else if (idadeMurilo < idadeBaeta && idadeMurilo < idadeCarolzita) {
  console.log("Murilo é o mais novo")
} else if (idadeCarolzita === idadeBaeta && idadeCarolzita < idadeMurilo) {
  console.log("Carolzita e Baêta são as mais novas")
} else if (idadeBaeta === idadeMurilo && idadeBaeta < idadeCarolzita) {
  console.log("Baêta e Murilo são os mais novos")
} else {
  console.log("Carolzita e Murilo são os mais novos")
}