const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

/**
 * Quando utilizamos o atributo '__proto__', podemos acessar o protótipo de um objeto.
 * Que seria meu superObjeto, o objeto pai. Ou seja, se eu tentar encontrar um atributo
 * dentro de 'ferrari' e não encontrar, ele vai procurar esse mesmo atributo dentro do meu
 * protótipo (objeto pai), se encontrar no objeto, ele vai retornar o valor que veio do pai.
 * Se não encontrar, ele retorna 'undefined'.
 * 
 */


// Object é uma função e por ser uma função, toda função tem o atributo 'prototype'.
/** 
 * O objeto em JS tem uma referência para seu protótipo, e essa é formar que JavaScript
 * define Herança. A partir da referência para um protótipo temos uma referência para um
 * outro objeto, que esse objeto tem atributos e comportamentos que podem ser acessar 
 * a partir do objeto filho. 
 * 
 * Podemos colocar um atributo que não exista no filho, aí ele vai procurar no protótipo pai,
 * não achou no pai, ele vai procurar no pai do pai, vai percorrendo a cadeia de protótipos
 * até encontrar determinado atributo. Essa é uma forma de ter reuso, para não replicar os 
 * mesmos atributos, as mesmas funções nos objetos.
 * 
 * A forma de termos de dentro de um objeto acessar o protótipo dele é a partir do atributo '__proto__'.
 * 
*/

console.log(ferrari.prototype) // undefined
console.log(ferrari.__proto__) // {}
console.log(ferrari.__proto__ === Object.prototype) // quando um objeto é criado (ferrari) ele aponta para Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // null

function MeuObjeto() {} // Será explicado mais para frente o atributo 'prototype' dentro das funções
console.log(typeof Object, typeof MeuObjeto) // function e function
console.log(Object.prototype, MeuObjeto.prototype) // {} e MeuObjeto {}

