function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const produto1 = new criarProduto('Notebook', 2199, 49)
console.log(produto1)