/**
 * O Array internamente no JavaScript é um objeto,
 * mas em vez de organizar os atributos a partir de chaves '{}' (identificadores),
 * é organizado a partir de uma estrutura indexada (começando pelo índice 0).
 * 
 * Não existe o tipo Array no JS
 * 
 */

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] // O elemento deletado de índice '1' ficará como undefined.
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

// splice() - Serve para adicionar/remover elementos em um determinado índice (e ao mesmo tempo fazer a duas ações).

// splice('índice que quer trabalhar', 'qtd de elementos para excluir')
aprovados.splice(1, 1) 
console.log(aprovados)

aprovados.splice(1, 2) // excluir o 'Carlos' e a 'Ana'.
console.log(aprovados)

aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // Excluiu nem um elemento e adicionou dois.
console.log(aprovados)