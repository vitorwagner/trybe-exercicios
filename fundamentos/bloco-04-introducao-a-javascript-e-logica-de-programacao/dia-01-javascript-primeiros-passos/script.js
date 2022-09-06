// Programa 1
const a = 60;
const b = 15;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Programa 2
const c = 30;
const d = 10;
let result;

if (c > d) {
  result = c;
} else {
  result = d;
}

console.log(result);

// Programa 3
const e = 30;
const f = 10;
const g = 20;

if (e > f && e > g) {
  result = e;
} else if (f > e && f > g) {
  result = f;
} else {
  result = g;
}

console.log(result);

// Programa 4
// Utilizando if
const h = 0;

if (h > 0) {
  result = "positive";
} else if (h < 0) {
  result = "negative";
} else {
  result = "zero";
}

console.log(result);

// Utilizando switch
switch (h / Math.abs(h)) {
  case 1:
    result = "positive";
    break;
  case -1:
    result = "negative";
    break;
  default:
    result = "zero";
    break;
}

console.log(result);

// Programa 5
const angle1 = 60;
const angle2 = 90;
const angle3 = 30;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
  result = "Error: all the angles must be positive";
} else if (angle1 >= 180 || angle2 >= 180 || angle3 >= 180) {
  result = "Error: no angle can be greater than 180";
} else if (angle1 + angle2 + angle3 === 180) {
  result = true;
} else {
  result = false;
}

console.log(result);

// Programa 6
const chessPiece = "Queen";

switch (chessPiece.toLocaleLowerCase()) {
  case "king":
    result =
      "Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.";
    break;
  case "queen":
    result =
      "Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.";
    break;
  case "rook":
    result =
      "Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.";
    break;
  case "knight":
    result =
      "Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.";
    break;
  case "bishop":
    result =
      "Bishops move diagonally any number of squares. They are unable to jump over pieces.";
    break;
  case "pawn":
    result =
      "Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction.      Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.";
    break;
  default:
    result = "Choose a Chess Piece";
    break;
}

console.log(result);

// Programa 7
const grade = 80;

if (grade > 100 || grade < 0) {
  result = "The grade must be between 0 and 100";
} else if (grade >= 90) {
  result = "A";
} else if (grade >= 80) {
  result = "B";
} else if (grade >= 70) {
  result = "C";
} else if (grade >= 60) {
  result = "D";
} else if (grade >= 50) {
  result = "E";
} else {
  result = "F";
}

console.log(result);

// Programa 8
const i = 30;
const j = 17;
const k = 21;

if (i % 2 === 0 || j % 2 === 0 || k % 2 === 0) {
  result = true;
} else {
  result = false;
}

console.log(result);

// Programa 9
const l = 30;
const m = 10;
const n = 21;

if (l % 2 === 0 && m % 2 === 0 && n % 2 === 0) {
  result = false;
} else {
  result = true;
}

console.log(result);

// Programa 10
const valorCusto = 10;
const valorVenda = 30;

if (valorCusto < 0 || valorVenda < 0) {
  result = "The cost of the product and the sale price must not be negative";
} else {
  const valorCustoTotal = 1.2 * valorCusto;
  result = 1000 * (valorVenda - valorCustoTotal);
}

console.log(result);

// Programa 11
const salarioBruto = 5000;
let aliquotaInss;
let aliquotaIr;

if (salarioBruto <= 1556.94) {
  aliquotaInss = 0.08 * salarioBruto;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  aliquotaInss = 0.09 * salarioBruto;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  aliquotaInss = 0.11 * salarioBruto;
} else {
  aliquotaInss = 570.88;
}

const salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98) {
  aliquotaIr = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  aliquotaIr = 0.075 * salarioBase - 142.8;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  aliquotaIr = 0.15 * salarioBase - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  aliquotaIr = 0.225 * salarioBase - 636.13;
} else {
  aliquotaIr = 0.275 * salarioBase - 869.36;
}

const salarioLiquido = salarioBase - aliquotaIr;

if (salarioLiquido <= 0) {
  result = "Salary must be greater than zero";
} else {
  result = salarioLiquido;
}

console.log(result);
