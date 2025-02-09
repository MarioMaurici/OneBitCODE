


/* O que são High Order Functions??

São funções que recebem outra função como paramêtro:
 -  Aqui, a função principal aceita outra função como parâmetro para modificar seu comportamento:

*/
    function aplicarOperacao(a, b, operacao) {
  return operacao(a, b);
    }

    function soma(x, y) {
    return x + y;
    }

    function subtrai(x, y) {
    return x - y;
    }

    console.log(aplicarOperacao(5, 3, soma));      // 8
    console.log(aplicarOperacao(5, 3, subtrai));  // 2
/*
Neste exemplo, a função aplicarOperacao é uma função de ordem superior porque ela recebe como argumento outra função (soma ou subtrai) que define a operação a ser realizada.
*/


//High Order Function com Arrays
const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//Map


//sem map
const names = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  names.push(personagem.nome)
}

// map: permite obter um novo array a partir de um array existenste
names = personagens.map(function (personagem) {
  return personagem.nome
})


//Filter


//sem filter
const orcs = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  if (personagem.raca === "Orc") {
    orcs.push(personagem)
  }
}

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

//Reduce


//sem reduce
let nivelTotal = 0
for (let i = 0; i < personagens.length; i++) {
  nivelTotal += personagens[i].nivel
}
// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})


//Sort

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
    return a.nivel - b.nivel
  })