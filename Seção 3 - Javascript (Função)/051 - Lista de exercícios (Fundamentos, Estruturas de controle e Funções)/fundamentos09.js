function classificacao(nota) {
    const arrayRange = (start, stop, step) =>
        Array.from({
            length: (stop - start) / step + 1
        }, (value, index) => start + index * step)

    const multiplosDe5 = arrayRange(5, 100, 5)

    const notaCorrigida = multiplosDe5.find(m => m >= nota && (m - nota) < 3 && (m - nota) >= 0) ?? nota

    if (notaCorrigida >= 40) return `Aprovado com nota ${notaCorrigida}`
    else return `Reprovado com nota ${notaCorrigida}`
}

console.log(classificacao(5))
console.log(classificacao(37))
console.log(classificacao(38.5))
console.log(classificacao(39))
console.log(classificacao(40))
console.log(classificacao(88))
console.log(classificacao(61))