Array.prototype.map2 = function (callback) {
    let newArray = []
    // acessando a instância de um array a partir do 'this'
    for (let i = 0; i < this.length /* aprovados.length */ ; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = (produto, indice, carro) => {
    console.log(indice, carro)
    return produto.preco
}

// carrinho.map2(apenasPreco(produto,indice,carrinho))
let resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
