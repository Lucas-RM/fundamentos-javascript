// Object é Deus e todo o resto é sua criação com imagem e semelhança de seu prototype.

/**
 * Prototype: Pertence a função construtora e serve para adicionar comportamentos a ela depois de criada.
 * __proto__: Pertence a instância e é uma referência ao objeto-pai.
 * 
 * Observação importante:  __proto__ se baseia em prototype é gerado e atribuído a instância no momento 
 * que fazemos um new.
 * 
 */

/** 
 * [[Prototype]] é Protótipo -> __proto__
 * 
 * 'MeuObjeto' é uma função que tem um atributo 'prototype' que aponta para 'MeuObjeto.prototype'.
 * 'MeuObjeto' tem um [[Prototype]] que aponta para 'Function.prototype'.
 * 
 * 'MeuObjeto.prototype' é um objeto que pode ter atributos e tem um [[Prototype]] que aponta para  Object.prototype.
 *  
 * 'Function.prototype' é uma função que tem um [[Prototype]] que aponta para Object.prototype. 
 * 
 * 'Object.prototype' é um objeto que tem um [[Prototype]] que aponta para nada (null).
 * 
 */


function MeuObjeto() {}
console.log(MeuObjeto.prototype) // O atributo 'prototype' é um objeto

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Todos os objetos criados a partir de uma mesma função construtura apontam para um mesmo protótipo. 
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
console.log(Object.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log()

// Resumindo a loucura
console.log((new MeuObjeto).__proto__) // é um objeto
console.log(MeuObjeto.__proto__) // é uma função

// { nome: 'Anônimo', falar: [Function (anonymous)] } (os dois tem esse resultado)
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true 

// [Object: null prototype] {} (os dois são objetos {} e tem esse resultado)
console.log(MeuObjeto.prototype.__proto__ === Object.prototype) // true

// {} (os dois são funções e tem esse resultado)  
console.log(MeuObjeto.__proto__ === Function.prototype) // true

// [Object: null prototype] {} (os dois são objetos {} e tem esse resultado)
console.log(Function.prototype.__proto__ === Object.prototype) // true

console.log()

console.log(typeof Function.prototype, Function.prototype) // é uma função
console.log(typeof Object.prototype, Object.prototype) // é um objeto
console.log(typeof MeuObjeto.prototype, MeuObjeto.prototype) // é um objeto

console.log()

console.log(Function.prototype.__proto__) // Object.prototype -> é um objeto
console.log(Object.prototype.__proto__) // null - não tem nenhum objeto depois de Object.prototype | é um objeto
console.log(MeuObjeto.prototype.__proto__) // Object.prototype -> é um objeto