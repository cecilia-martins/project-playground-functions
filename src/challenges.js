// Desafio 1
function compareTrue(para1, para2) {
  if (para1 === true && para2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) /2;
}

// Desafio 3
function splitSentence(frase) {
  let espacos = [];
  let separadas = []
  for (let posi = 0; posi < frase.length ; posi +=1) {
     if (frase[posi] === " ") {
      espacos.push(frase[posi])
    } else {
      separadas.push(frase)
    }
  }
  console.log(separadas);
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
