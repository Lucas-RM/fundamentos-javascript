function multiplicaVetor(vetor, multiplicador) {
    return vetor.map(x => x * multiplicador)
}

function multiplicaVetorSeMaiorQue5(vetor, multiplicador) {
    if (multiplicador < 5) return
    return vetor.map(x => x * multiplicador)
}

let vetor = [1, 2, 3, 4, 5]

console.log(multiplicaVetor(vetor, 3))
console.log(multiplicaVetorSeMaiorQue5(vetor, 11))
console.log(multiplicaVetorSeMaiorQue5(vetor, 4))