function objetoParaArray(objeto) {
    return Object.entries(objeto) // imprimi um array contendo sub-arrays do par chave/valor do objeto
}

function objetoParaArray2(objeto) {
    const chaves = Object.keys(objeto) // imprimi as chaves do objeto

    /**
     * Map() - percorre cada um dos elementos do array e o resultado é 
     * um outro array do mesmo tamanho com a transformação de seus dados. 
     * 
     * */
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    
    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})) // irá retornar [ ["nome": "Maria"], ["profissao", "Desenvolvedora de software"] ]

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
})) // irá retornar [ ["codigo", 11111], ["preco", 12000] ]

console.log()

console.log(objetoParaArray2({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})) // irá retornar [ ["nome": "Maria"], ["profissao", "Desenvolvedora de software"] ]

console.log(objetoParaArray2({
    codigo: 11111,
    preco: 12000
})) // irá retornar [ ["codigo", 11111], ["preco", 12000] ]
