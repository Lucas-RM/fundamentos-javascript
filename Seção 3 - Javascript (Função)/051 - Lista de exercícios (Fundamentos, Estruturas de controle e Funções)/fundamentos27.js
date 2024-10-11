function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    const [criancaAlturaMaior, criancaAlturaMenor] = altura1 > altura2 ? ["criança 1", "criança 2"] : ["criança 2", "criança 1"]
    const [criancaTaxaMaior, criancaTaxaMenor] = taxa1 > taxa2 ? ["criança 1", "criança 2"] : ["criança 2", "criança 1"]

    const [alturaMaior, alturaMenor] = (altura1 >= altura2) ? [altura1, altura2] : [altura2, altura1]

    if (alturaMaior === alturaMenor) {
        if (taxa1 === taxa2) return 'As crianças tem igual altura e crescimento.'

        return `A ${criancaTaxaMaior} ultrapassará a ${criancaTaxaMenor} em 1 ano.`
    }

    const [taxaAlturaMaior, taxaAlturaMenor] = altura1 >= altura2 ? [taxa1 / 100, taxa2 / 100] : [taxa2 / 100, taxa1 / 100]

    if (taxaAlturaMaior >= taxaAlturaMenor) return `A ${criancaAlturaMenor} não ultrapassará a ${criancaAlturaMaior}.`

    const anos = (((alturaMaior * (1 + taxaAlturaMaior)) - alturaMenor) / (alturaMenor * taxaAlturaMenor)).toFixed(1)

    return `A ${criancaAlturaMenor} ultrapassará a ${criancaAlturaMaior} em ${anos.toString().replace('.', ',')} ano(s).`
}

console.log(calcularCrescimento(150, 1, 150, 1))
console.log(calcularCrescimento(150, 2, 130, 4))
console.log(calcularCrescimento(150, 1, 130, 1))
console.log(calcularCrescimento(150, 1, 150, 2))
console.log(calcularCrescimento(150, 2, 150, 1))
console.log(calcularCrescimento(178.92, 2, 183.34, 1))