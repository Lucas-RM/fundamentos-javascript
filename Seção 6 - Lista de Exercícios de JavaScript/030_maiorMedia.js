function receberMelhorEstudante(estudantes) {
    const estudantesComNotas = Object.entries(estudantes)

    const estudantesComMedias = []

    estudantesComNotas.forEach(en => {
        estudantesComMedias.push({
            nome: en[0],
            media: en[1].reduce((total, notaAtual) => total + notaAtual, 0) / en[1].length
        })
    })

    return estudantesComMedias.filter(m => m.media === Math.max(...estudantesComMedias.map(m => m.media)))[0]
}

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function receberMelhorEstudante2(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0,
            valor = 1
        return {
            nome: estudante[chave],
            media: media(estudante[valor])
        }
    })

    // const estudantesOrdenados = estudantesComMedias.filter(m => m.media === Math.max(...estudantesComMedias.map(m => m.media)))
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
})) // retornará { nome: "Mariana", media: 7.875 }

console.log(receberMelhorEstudante2({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))