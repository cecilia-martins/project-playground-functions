// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(telefone) {
/*   
  let arrayOrdem = telefone.sort(arrayReturn);
  let arrayReturn = [];
  for (let posi = 0; posi < telefone.length; posi +=1) {
    if (telefone.length !== 11) {
      return "Array com tamanho incorreto.";
    } else if (telefone[posi] < 0 || telefone[posi] > 9 || telefone.[posi] ) {

    } else if () {

    }
  }
    return arrayReturn; */
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let medidaBaixo = "";
  let outros2Lados = "";
  // //A MEDIDA DE BAIXO TEM Q SER MENOR QUE A DOS OUTROS DOIS LADOS SOMADOS
  // //MEDIDA DE BAIXO VAI SER A C?
  // let lado1 = Math.abs(lineA + lineB);
  // let lado2 = Math.abs(lineB + lineC);
  // let lado3 = Math.abs(lineC + lineA);
  if (lineA > lineB){
    outros2Lados = lineA + lineC;
    medidaBaixo = lineB;
  }
  if((medidaBaixo < outros2Lados) && medidaBaixo > (Math.abs(medidaBaixo) !== Math.abs(outros2Lados))) {
    return true;
  } /* else if (medidaBaixo > outros2Lados && ){

  } */ else {
    return false;
  }

}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
