function observarIntervalo(vetor) {
    const dentroIntervalo1020 = vetor.filter(x => x >= 10 && x <= 20).length
    const foraIntervalo1020 = vetor.filter(x => x < 10 || x > 20).length

    return `Dentro do intervalo [10, 20] contém ${dentroIntervalo1020}. Fora intervalo [10, 20] contém ${foraIntervalo1020}.`
}

let vetor = [10, 0, -1, -10, -20, 20, 3, 15, 19, 11, 9, -9, 2, 50, 21, 1, 100]

console.log(observarIntervalo(vetor))
