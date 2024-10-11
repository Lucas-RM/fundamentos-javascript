// Object.preventExtensions - impede que o objeto seja estendido.
// Não vai conseguir aumentar o número de atributos ou adicionar novos atributos.
// Consegue excluir, mas não adicionar.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - sela o objeto.
// Não vai conseguir aumentar o número de atributos ou adicionar/deletar novos atributos.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.nome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze - congela o objeto. selado + valores constantes (writable igual false)
// Não vai conseguir aumentar o número de atributos ou adicionar/deletar novos atributos e modificar.
