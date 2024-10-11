function qtdDeRecordesDePontuacoesEPiorJogo(pontuacoes) {
    let qtdQuebraDeRecords = 0
    let piorJogo = 1

    let melhorPontuacao = pontuacoes[0]
    let piorPontuacao = pontuacoes[0]

    pontuacoes.forEach((pontuacao, jogo) => {
        if (pontuacao > melhorPontuacao) {
            qtdQuebraDeRecords++
            melhorPontuacao = pontuacao
        } else if (pontuacao < piorPontuacao) {
            piorJogo = jogo + 1
            piorPontuacao = pontuacao
        }
    })

    return [qtdQuebraDeRecords, piorJogo]
}

const pontuacoes = [0, 20, 0, 20, 20, 20, 20, 20]

console.log(qtdDeRecordesDePontuacoesEPiorJogo(pontuacoes))