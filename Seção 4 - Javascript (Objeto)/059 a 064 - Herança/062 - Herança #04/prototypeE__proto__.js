// Antes de mais nada, vamos esclarecer o que é prototype e __proto__ ok? 

/**
 * Prototype: Representa um objeto-pai que pertence a uma função. 
 * A partir dele conseguimos adicionar propriedades/funções que podem ser 
 * herdadas nas instâncias provenientes dessa função, veja: 
*/
function Animal(nome) {
    this.nome = nome
}

 
const cachorro = new Animal('Fido')
console.log(cachorro.nome);
 
Animal.prototype.respirar = () => {
    console.log('Respirando.....')
}
 
cachorro.respirar()

/**
 * Em um primeiro momento Animal não possui o comportamento respirar, só depois 
 * que adicionamos e consequentemente a instância de Animal(cachorro) agora tem 
 * acesso ao comportamento respirar. Se imprimirmos o prototype, você verá:
*/
console.log(Animal.prototype) 
// Animal { respirar: [Function] }

/**
 * Ou seja, prototype é um Objeto que você pode usar para adicionar novos 
 * atributos/comportamentos a uma função construtora existente. 
 * A partir dele conseguimos também adicionar novas funções a funções 
 * construtoras nativas como por exemplo String, veja:
*/
String.prototype.gritar = function() {
    return this.toUpperCase()
}
 
let nome = 'Fulano'
 
console.log(nome.gritar())
// FULANO

/**
 * Como pode ver, adicionamos um novo comportamento na classe String, sendo assim, 
 * todas as strings agora terão a função Gritar, ok?
*/



/**
 * _proto_: É uma propriedade do tipo Objeto que pertence a instância. Essa propriedade representa a referência ao objeto-pai.  
 * Observação importante:  __proto__ se baseia em prototype é gerado e atribuído a instância no momento que fazemos um new.
 * 
 * Então, já que é uma referência ao objeto-pai e se baseia nele na criação, concorda comigo que ambos são iguais? Veja:
*/
console.log(Animal.prototype)   // Animal { respirar: [Function] }
console.log(cachorro.__proto__) // Animal { respirar: [Function] }
 
console.log(Animal.prototype == cachorro.__proto__); // true


/** Recapitulando:
 * 
 * Prototype: Pertence a função construtora e serve para adicionar comportamentos a ela depois de criada.
 * __proto__: Pertence a instância e é uma referência ao objeto-pai.
 * 
 * Com isso em mente, agora vamos analisar seu código linha a linha:
*/

function MinhaFuncao () {}
console.log(`MinhaFuncao.__proto__ é um ${typeof(MinhaFuncao.__proto__)}`) // function
console.log(`Function.prototype é um ${typeof(Function.prototype)}`) // function

console.log(`MinhaFuncao é um ${typeof(MinhaFuncao)}`) // function
// Acredito que esse era o valor esperado por você correto? MinhaFunção é do tipo function ok.

console.log(`MinhaFuncao.prototype é um ${typeof(MinhaFuncao.prototype)}`) // Object
// Como vimos anteriormente, o prototype de uma função é um objeto então nesse caso não seria diferente, MinhaFuncao.prototype é um Objeto.



/**
 * console.log(`MinhaFuncao.__proto__ é um ${typeof(MinhaFuncao.__proto__)}`) // function
 * console.log(`Function.prototype é um ${typeof(Function.prototype)}`) // function
 *  
 * Essas duas últimas linhas acima você não precisa se preocupar tanto pois 
 * estamos falando de código realmente raiz e essas regras acima não 
 * se aplicam inteiramente a esses casos, mas vou tentar dar uma 
 * explicação simplificada:
*/
console.log(`Function.prototype é um ${typeof(Function.prototype)}`) // function

/**
 * JavaScript tecnicamente tem dois tipos raiz, function e object. 
 * Tome como verdade que, function(não Function) é basicamente a implementação 
 * por baixo dos panos da definição de uma função, ou seja o código que define 
 * o que é uma função e seus comportamentos, como por exemplo, chamar com parêntesis ou 
 * com o call. apply etc. 
 * 
 * Então quando fazemos Function.prototype acredito que esteja se referindo a essa definição raiz de function.
 * 
 * No caso de:
*/
console.log(`MinhaFuncao.__proto__ é um ${typeof(MinhaFuncao.__proto__)}`) // function

/**
 * Estamos nos referindo ao __proto__ de MinhaFunção que no caso é do tipo function. 
 * Então basicamente estamos tentando pegar a referência ao objeto-pai de function 
 * no entanto chegamos no inicio da hierarquia ou seja, a raiz então o tipo é function.
*/

/**
 * Em resumo, não precisa se preocupar tanto com esses dois últimos casos, 
 * se ao final dessa explicação você tiver entendido que:
 * 
 * Prototype: Pertence a função construtora e serve para adicionar comportamentos a ela depois de criada.
 * __proto__: Pertence a instância e é uma referência ao objeto-pai.
 * 
 */
