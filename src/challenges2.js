// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let naOrdem = tech.sort();

  const criandoObj = naOrdem.map((cadaTech) => {
    const obj = {
      tech: cadaTech,
      name: name
    };
    return obj;
  });
  return criandoObj;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

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
function triangleCheck(aA, bB, cC) {
  let qualquer = '';
  let another = '';
  if ((aA + bB) < cC) {
    qualquer = cC;
    another = aA + bB;
  } else if ((bB + cC) < aA) {
    qualquer = aA;
    another = bB + cC;
  } else if ((cC + aA) < bB) {
    qualquer = bB;
    another = cC + aA;
  }
  if (qualquer > another){
    return false;
  } else if (qualquer < (Math.abs(qualquer) !== Math.abs(another))) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
