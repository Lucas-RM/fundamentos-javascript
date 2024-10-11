/* Funções Importantes: keys, values, entries, defineProperty, assign e freeze */

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
    endereco: {
        logradouro: 'Av Gigante',
        numero: 10
    }
} 

// Formas de obter os dados de um objeto e
/** Fazer uma introspecção em um objeto (Reflection):
 *   ler o conteúdo, listar as propriedades, ver os valores 
 *   do objeto e a partir disso conseguir gerar dinamicamente, 
 *   por exemplo, um SQL (para inserir um dado no banco de dados (Insert)).
 * 
 *   Então, podemos ler o conteúdo do objeto, montar o SQL dinamicamente e,
 *   a partir do nome da chave e os valores, podemos persistir um dado no BD.
 * 
 * */ 
console.log(Object.keys(pessoa)) // imprimi as chaves do objeto
console.log(Object.values(pessoa)) // imprimi os valores contidos de cada chave do objeto
console.log(Object.entries(pessoa)) // imprimi um array contendo sub-arrays do par chave/valor do objeto
console.log()

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log()

// Fazer uma desestruturação (destructing)
Object.entries(pessoa).forEach(([chave, valor]) /* operador destructing */ => {
    if (typeof valor !== 'object') {
        console.log(`${chave}: ${valor}`)
    } else {
        console.log(`${chave}:`)
        Object.entries(pessoa[chave]).forEach(([subChave, subValor]) => {
            console.log(`\t${subChave}: ${subValor}`)
        })
    }
})

console.log()

// Definir uma propriedade de um objeto
/** 
 * Podemos definir algumas características de uma propriedade:
 * Por exemplo, uma propriedade pode ou não pode ser alterada, ficará ou não visível 
 * quando fizer Object.keys() por exemplo.
 * 
 * */ 
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // para ser listado
    writable: false, // não poder ser modificada
    value: '01/01/2019'
}) 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

// Concatena os atributos de objetos para um objeto de destino
// Concatenar vários objetos em um só
// ** os últimos elementos vão se sobrescrevendo se tiver propriedades com o mesmo nome (chave)
const obj = Object.assign(dest, o1, o2) // concatena os atributos dos objetos 'o1' e 'o2' com o objeto 'dest'

Object.freeze(obj)
obj.c = 1234
console.log(obj)
