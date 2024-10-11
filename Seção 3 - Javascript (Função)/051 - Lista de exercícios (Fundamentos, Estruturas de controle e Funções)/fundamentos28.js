function paresEImpares(vetor) {
    const pares = vetor.filter(v => parseInt(v) % 2 === 0).length
    const impares = vetor.filter(v => parseInt(v) % 2 !== 0).length

    return {
        pares,
        impares
    }
}

let vetor = [2, 10, 7, 3, 5, 12, 20, 21, 23, 19, 14, 8, 1, 0, 9, 51]

console.log(paresEImpares(vetor))
