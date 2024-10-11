/**
 * Função em JS é First-Class Object (Citizens)
 * Higher-order function
 * 
 * Função pode ser tratada como um dado, como sendo um dado podemos
 * passar a função como parâmero, retornar uma função como resposta 
 * de uma função, criar uma função e armazenar em uma variável, 
 * uma função pode ter uma outra função dentro dela.
 * 
 */

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
