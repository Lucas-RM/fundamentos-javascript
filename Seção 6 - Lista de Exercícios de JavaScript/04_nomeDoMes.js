function nomeDoMes(indiceDoMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ]

    return Number.isInteger(indiceDoMes) && indiceDoMes > 0 && indiceDoMes <= 12 ? meses[--indiceDoMes] : "Esse Mês Não Existe!"
}

console.log(nomeDoMes(1)) // retornará "janeiro"
console.log(nomeDoMes(4)) // retornará "abril"
