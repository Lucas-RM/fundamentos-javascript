const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    vetorAdicionar.forEach(x => { 
        console.log(x)
        vetorPilha.push(x)
    })

    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)
