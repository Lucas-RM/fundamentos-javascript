function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + (taxaDeJuros / 100) * tempoDeAplicacao)
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + (taxaDeJuros / 100)) ** tempoDeAplicacao
}

console.log(jurosSimples(10000, 3, 3))
console.log(jurosCompostos(10000, 3, 3))

console.log(jurosSimples(100, 10, 2))
console.log(jurosCompostos(100, 10, 2))
