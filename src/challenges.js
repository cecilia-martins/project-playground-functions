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
function splitSentence(umaString) {
  let arrayString = [];

  arrayString = umaString.split(" ");

  return arrayString;
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
  let maiorSeRep = [];  /* Math.max.apply(null, arrayNumbers); */
  let qntSeRep = 0;
  for (let posi = 0; posi < arrayNumbers.length; posi +=1){ 
    
    
  if (arrayNumbers[0] > arrayNumbers[posi]) {
    maiorSeRep.push(arrayNumbers[posi]);
  }
    /* .filter(maiorSeRep = arrayNumbers >= arrayNumbers); */
  }
 /*  arrayNumbers.map(function(numero) {
    maiorSeRep.push(numero === numero)
  }) */
    for (let i = 0; i < maiorSeRep.length; i +=1) {
      qntSeRep += 1;
    }

  return qntSeRep.length;
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
 let strings2Return = [];
//  let strings2Return2 = [];
  for (let posi = 0; posi < arrayNumber.length; posi +=1){ 
    if (arrayNumber[posi] % 3 === 0 && arrayNumber[posi] % 5 === 0) {

      strings2Return.push("fizzBuzz");
      
  } else if (arrayNumber[posi] % 5 === 0) {
      
    strings2Return.push("buzz");
    
  } else if (arrayNumber[posi] % 3 === 0) {
      
    strings2Return.push("fizz");
    
  } else /* if (arrayNumber[posi] % 3 !== 0 && arrayNumber[posi] % 5 !== 0) */ {
    strings2Return.push("bug!")
  }
 }
  return strings2Return;
}

// Desafio 9
function encode(paramString) {
  /* let codificada = paramString.replace(/a/g, /e/g, /i/g, /o/g, /u/g, "1", "2", "3", "4", "5") */
  let codificada = paramString.replace(/a/g, "1")
  .replace(/e/g, "2")
  .replace(/i/g, "3")
  .replace(/o/g, "4")
  .replace(/u/g, "5")
  
  return codificada;
}
function decode(outroParam) {
  /* let decodificada = outroParam.replace(/1/g, /2/g, /3/g, /4/g, /5/g, "a", "e", "i", "o", "u") */
  let decodificada = outroParam.replace(/1/g, "a")
  .replace(/2/g, "e")
  .replace(/3/g, "i")
  .replace(/4/g, "o")
  .replace(/5/g, "u")
  
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
 