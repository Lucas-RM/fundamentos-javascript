const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
const precos = e => JSON.parse(e).preco
let resultado = carrinho.map(precos)
console.log(resultado)

// Resposta da Aula
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)