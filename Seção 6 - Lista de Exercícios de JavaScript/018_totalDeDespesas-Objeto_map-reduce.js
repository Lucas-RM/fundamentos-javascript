function despesasTotais(produtos) {
    return produtos.map(p => p.preco ?? 0).reduce((total, valorAtual) => total + valorAtual)
}

function despesasTotais2(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])) // retornará 239.99

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])) // retornará 34599.89

console.log(despesasTotais[{nome: "Galaxy S20", categoria: "Eletrônicos"}])

console.log()

console.log(despesasTotais2([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])) // retornará 239.99

console.log(despesasTotais2([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]))
