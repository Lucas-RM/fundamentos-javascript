// Criando o próprio operador 'new'

// Simulando o operador 'new' no momento de instanciar um objeto 
// a partir de uma função construtura


function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// Simulando o 'new'
function novo(f, ...params) { // função construtura e conjuntos de parâmetros
    const obj = {}
    obj.__proto__ = f.prototype // Apontar o protótipo do objeto 'obj' para o atributo 'prototype' da função 'f'
    f.apply(obj, params) // executa a função 'f' passando como objeto (this) o 'obj' e os parâmetros
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)