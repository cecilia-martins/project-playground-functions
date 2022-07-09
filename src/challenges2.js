// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let naOrdem = tech.sort();
  const criandoObj = naOrdem.map((cadaTech) => {
    const obj = {
      tech: cadaTech,
      name,
    };
    return obj;
  });
  return criandoObj;
}

// Desafio 11
const funcAuxiliar = (tel) => {
  if (tel.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < tel.length; i += 1) {
    if (tel[i] < 0 || tel[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
};

function generatePhoneNumber(arrayN) {
  const ttt = funcAuxiliar(arrayN);
  console.log(ttt);
  return ttt;
}
console.log(funcAuxiliar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Desafio 12
function triangleCheck(aA, bB, cC) {
  if (aA < bB + cC && aA > Math.abs(bB - cC)) {
    return true;
  }
  return false;
  // meu codigo passou, POREM, o lint deixa ele todo vermelho (E COM TODA RAZÃO KKKKKKKK TAVA ENORME MANO).
  // não sei bem como fazer referencia, mas esse é o link do codigo que faz o msm q o meu, mas com menos linhas e nenhuma delas vermelha
  // https://github.com/tryber/sd-019-c-project-playground-functions/pull/142/commits/e13c22c869525b1f76ef73c14d9e5e4cde8410a7
}

// Desafio 13
function hydrate() {

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
