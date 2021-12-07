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
function splitSentence() {
  let espacos = [];
  let separadas = [];
  for (let posi = 0; posi < frase.length ; posi +=1) {
     if (frase[posi] === " ") {
      espacos.push(frase[posi])
    } else {
      separadas.push(frase[posi])
    }
  }
        console.log(splitSentence("pao com ovo"));
} 

// Desafio 4
function concatName(arrayNames) {
  let ultimo =  arrayNames[arrayNames.length -1];
  let primeiro = arrayNames[0];
  return ultimo + ", " + primeiro;
} 

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;

  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumb = [];
  for(let posi = 1; posi <= arrayNumbers.length -1; posi +=1) {
    if(arrayNumbers[posi] >= arrayNumbers[posi]){
      higherNumb.push(arrayNumbers[posi]);
    }
  }
    return higherNumb.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = cat1 - mouse;
  let disCat2 = cat2 - mouse;

  if (Math.abs(disCat1) < Math.abs(disCat2)) {
    return "cat1"
  } else if (Math.abs(disCat2) < Math.abs(disCat1)) {
    return "cat2"
  } else if (Math.abs(disCat1) === Math.abs(disCat2)) {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
 let stringsReturn = [];
  for (let posi = 0; posi < arrayNumber.length; posi +=1){
  if(arrayNumber[posi] % 3 === 0){
    stringsReturn.push(arrayNumber[posi])
  } else if (arrayNumber[posi] % 5 === 0) {
    stringsReturn.push(arrayNumber[posi])
  } else if (arrayNumber[posi] % 3 === 0 && arrayNumber[posi] % 5 === 0) {
    return "fizzBuzz";
  } else if (arrayNumber[posi] % 3 !== 0 && arrayNumber[posi] % 5 !== 0) {
    return "bug!";
  }
 }
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
