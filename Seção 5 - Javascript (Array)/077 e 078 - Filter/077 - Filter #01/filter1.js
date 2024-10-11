/**
 * filter() - é uma função callback que retorna um array com 
 * todos os elementos que passaram no teste implementado pela 
 * função fornecida.
 * 
 * Precisamos passar uma função callback com um teste (condição)
 * que vai retornar true ou false.
 * 
 * */


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plático', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
   return false 
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
