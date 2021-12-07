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
  if ((cat1 !== mouse) < (cat2 !== mouse)){
    return "cat1"
  } else if ((cat2 !== mouse) < (cat1 !== mouse)){
    return "cat2"
  } else if ((cat1 !== mouse) === (cat2 !== mouse)){
    return "os gatos trombam e o rato foge"
  }
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
