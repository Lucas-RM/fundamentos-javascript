// Criar variáveis no JS usando o let e não o var. O let é uma forma mais moderna de criar variáveis.

var a = 3
let b = 4

// Com o var você pode declarar a mesma variável várias vezes. Já com o let não podemos fazer a mesma coisa.

var a = 30
b = 40 // Correto
// let b = 4 (erro)

console.log(a, b)

a = 300
b = 400

console.log(a, b)


/**
 * Quanto mais constantes (const) em seu programa, melhor será para manter ele.
 * Tudo aquilo que não tenha motivo para alterar no algoritmo, comece colocando 
 * uma constante (const), se precisar mudar é só alterar para let.
 * 
 */

const c = 5 
// c = 50 (erro)
console.log(c)
