function mediaAritmetica(vetor) {
    return vetor.reduce((acumulador, valorAtual) => acumulador + valorAtual) / vetor.length
}

let vetor = [10, 20, 30, 40, 50, 60, 70, 80]

console.log(mediaAritmetica(vetor))
