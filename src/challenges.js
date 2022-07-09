// Desafio 1
function compareTrue(para1, para2) {
  if (para1 === true && para2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(umaString) {
  let arrayString = [];
  arrayString = umaString.split(' ');

  return arrayString;
}

// Desafio 4
function concatName(arrayNames) {
  let ultimo = arrayNames[arrayNames.length - 1];
  let primeiro = arrayNames[0];
  const concat = `${ultimo}, ${primeiro}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;

  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrayN) {
  let bigger = arrayN[0];
  let repeat = 1;
  for (let i = 1; i < arrayN.length; i += 1) {
    if (bigger === arrayN[i]) {
      repeat += 1;
    }
    if (bigger < arrayN[i]) {
      bigger = arrayN[i];
      repeat = 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = cat1 - mouse;
  let disCat2 = cat2 - mouse;

  if (Math.abs(disCat1) < Math.abs(disCat2)) {
    return 'cat1';
  }
  if (Math.abs(disCat2) < Math.abs(disCat1)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
const ttt = (param) => {
  if (param % 3 === 0 && param % 5 === 0) return 'fizzBuzz';
  if (param % 5 === 0) return 'buzz';
  if (param % 3 === 0) return 'fizz';
  return 'bug!';
};

function fizzBuzz(arrayN) {
  let toReturn = [];
  for (let i = 0; i < arrayN.length; i += 1) {
    toReturn.push(ttt(arrayN[i]));
  }
  return toReturn;
}

// Desafio 9
function encode(paramString) {
  /* let codificada = paramString.replace(/a/g, /e/g, /i/g, /o/g, /u/g, "1", "2", "3", "4", "5") */
  let codificada = paramString
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');

  return codificada;
}
function decode(outroParam) {
  /* let decodificada = outroParam.replace(/1/g, /2/g, /3/g, /4/g, /5/g, "a", "e", "i", "o", "u") */
  let decodificada = outroParam
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');

  return decodificada;
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
