// pessoa -> 123 -> {...}
// O identificador 'pessoa' está apontando para um endereço '123' e esse 
// endereço aponta para o objeto que existe no endereço de memória.
const pessoa = {
    nome: 'João'
}

// a constante 'pessoa' continua no mesmo endereço, nós alteramos somente o dado (objeto). 
// O que não podemos alterar é a constante 'pessoa'
pessoa.nome = 'Pedro' 
console.log(pessoa)

/** pessoa -> 456 -> {...}
 * - Estamos tentando apontar a constante 'pessoa' a um novo endereço (pq estamos criando um novo objeto)
 * 
 */
// pessoa = { nome: 'Ana' } error

Object.freeze(pessoa) // Congelar o objeto 'pessoa', não conseguimos alterar o objeto de nenhuma forma.
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({
    nome: 'João'
})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)