function maiorEMenor(vetor) {
    const ordemCrescente = vetor.sort((a, b) => a - b)

    return `Maior valor é ${ordemCrescente[ordemCrescente.length - 1]}. Menor valor é ${ordemCrescente[0]}.`
}

let vetor = [-1, 10, -10, 0, 1, 100, 50, 70, -11, 11, 101]

console.log(maiorEMenor(vetor))
