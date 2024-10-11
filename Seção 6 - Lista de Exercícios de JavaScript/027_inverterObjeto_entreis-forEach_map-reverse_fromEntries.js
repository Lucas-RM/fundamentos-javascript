function inverter(objeto) {
    const novoObjeto = new Object
    Object.entries(objeto).forEach(([chave, valor]) => novoObjeto[valor] = chave)

    return novoObjeto
}

function inverter2(objeto) {
    /**
     * Object.entries() = [ [chave, valor], ... ] -> 
     * .map() => reverse([chave, valor]) = [ [valor, chave], ...] 
     * 
     *  */ 
    const paresDeChaveValorInvertidos = Object.entries(objeto)
        .map(parChaveValor => parChaveValor.reverse())

    // transforma uma lista (array) de pares chave-valor em um objeto.
    return Object.fromEntries(paresDeChaveValorInvertidos)
}


console.log(inverter({
    a: 1,
    b: 2,
    c: 3
})) // retornará { 1: "a", 2: "b", 3: "c"}

console.log(inverter2({
    a: 1,
    b: 2,
    c: 3
}))
