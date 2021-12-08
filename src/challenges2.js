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
/*   let qualquerUmDosLados = "";
  let outros2Lados = ""; */
  if ((lineA + lineB) < lineC &&  lineC > ((lineA + lineC) !== lineC)) {
    return true;
  } else if((lineB + lineC) < lineA &&  lineA > ((lineB + lineC) !== lineA)) {
    return true;
  } else if((lineC + lineA) < lineB &&  lineB > ((lineC + lineA) !== lineB)) {
    return true;
  } else {
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
