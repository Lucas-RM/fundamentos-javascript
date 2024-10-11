// Objeto é uma coleção dinâmica de pares de chave/valor

// criar um objeto a partir do operador new
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco // exclui  atributos de um objeto
delete produto['marca do produto']
console.log(produto)

// objeto mais complexo
/**
 * Temos os seguintes atributos:
 * - Numbers, Strings
 * - Par chave/valor cujo o valor é um objeto que tem outros atributos e outros objetos (ex. proprietario))
 * - Par chave/valor cujo o valor são arrays (podendo ter objetos ou dados básicos)
 * - Funções
 * 
 */
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' // utilizar quando queremos fazer uma introspecção
/**
 * Introspecção ou Reflexão: É a habilidade que uma linguagem tem de fazer com que seus objetos ou 
 * classes consigam ler seus atributos. É esse aspecto que nos permite saber quais atributos ou 
 * métodos fazem parte de uma determinada classe/objeto.
 * 
 */

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // undefined
console.log(carro.condutores.length) // error
