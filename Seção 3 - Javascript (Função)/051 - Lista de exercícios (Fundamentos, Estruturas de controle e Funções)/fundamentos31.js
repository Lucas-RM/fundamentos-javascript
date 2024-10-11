function qtdNumerosNegativos(vetor) {
    return `Há nesse vetor ${vetor.filter(n => n < 0).length} números negativos.`
}

let vetor = [-1, 10, -10, 1, 0, 0.1, -0.2, 100, -5, 25, 12]

console.log(qtdNumerosNegativos(vetor))