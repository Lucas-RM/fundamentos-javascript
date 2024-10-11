/**
 * JavaScript é uma linguagem de tipagem dinâmica (fraca),
 * mas não significa que é ela não tem tipo.
 * Ela tem tipo, porém ela pode variar no decorrer do programa.
 * 
 */

let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

// Evitar nome genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkk


console.log('');
/**
 * Tipagem Fraca: está ligada a característica da linguagem de realizar 
 * conversões automaticamente entre tipos diferentes de dados. 
 * 
 * Veja o exemplo abaixo abaixo em Javascript:
 * 
 */

var nome = "Elton Fonseca" // string 
var idade = 28 // number
console.log(nome + " " + idade) // Elton Fonseca 28


/**
 * Tipagem Forte: Linguagens fortemente tipadas não realizam conversões automaticamente. 
 * 
 * Vamos pegar como exemplo a linguagem Python. Ela possui tipagem forte, 
 * se formos executar o exemplo acima em Python teríamos um erro:
 * 
 * Java é uma linguagem de tipagem forte.
 * Python é uma linguagem de tipagem forte. 
 * 
 */ 

/**
 * nome = "Elton Fonseca" #str
 * idade = 28 #int
 * print(nome + " " + idade) #TypeError: can only concatenate str (not "int") to str
 * 
 */
