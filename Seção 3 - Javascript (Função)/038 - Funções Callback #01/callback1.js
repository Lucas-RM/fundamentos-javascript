/**
 * Funções Callback são funções passada a outra função como argumento, 
 * que é então invocado dentro da função externa para completar algum 
 * tipo de rotina ou ação.
 * 
 * function greeting(name) {
 *  alert("Olá " + name)
 * }
 * 
 * function processUserInput(callback) {
 *  var name = prompt("Por favor insira seu nome.")
 *  callback(name)
 * }
 * 
 * processUserInput(greeting)
 * 
 */

// As funções callbacks utilizadas em forEach têm uma assinatura com três parâmetros: 
// O Valor corrente, no caso do exemplo, nome. O Índice. E o Array propriamente dito.

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice, array) {
    console.log(`${indice + 1}. ${nome} { ${array} }`)
}

fabricantes.forEach(imprimir)
console.log()
fabricantes.forEach(fabricante => console.log(fabricante))
console.log()
fabricantes.forEach((fabricante, indice, array) => console.log(`${indice + 1}. ${fabricante} { ${array} }`))
