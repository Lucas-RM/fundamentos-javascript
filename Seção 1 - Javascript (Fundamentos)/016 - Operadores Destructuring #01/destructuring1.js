/**
 * Operadores Destructuring são operadores desestruturação,
 * ele tira da estrutura alguma coisa.
 * 
 * Uma estrutura é um Objeto, então é uma forma de extrair 
 * de dentro de um objeto seus atributos.
 * 
 * O Array sendo uma estrutura, seria uma forma de tirar
 * elementos de um array a partir dessa forma de extrair.
 * 
 * O operador destructuring tem duas formas de escrita,
 * quando ele trabalha no âmbito de Objeto usamos na sua 
 * sintaxe as chaves '{}' e
 * quando queremos utilizar no âmbito de Array usamos na 
 * sua sintaxe os colchetes '[]'.
 * 
 * Novo recurso do ES2015
 * 
 */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade) // Ana 5

const { nome: n, idade: i} = pessoa
console.log(n, i) // Ana 5

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // Rua ABC 1000 undefined


// Erro: Tentando acessar uma propriedade que é 'undefined' ou 'null'. 
// const { conta: { ag, num } } = pessoa
// console.log(ag, num)
