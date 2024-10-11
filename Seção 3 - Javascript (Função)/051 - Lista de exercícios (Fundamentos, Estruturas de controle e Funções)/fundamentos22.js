function valorDaAnuidade(mesPago, valorAnuidade) {
    const mesPagamento = 1
    const atraso = mesPago - mesPagamento

    if (mesPago > mesPagamento) return (valorAnuidade * (1.05) ** atraso).toFixed(2)
    else if (mesPago <= 0) return 'Mês Inválido'

    return valorAnuidade
}

console.log(valorDaAnuidade(2, 100))
console.log(valorDaAnuidade(1, 100))
console.log(valorDaAnuidade(3, 100))
console.log(valorDaAnuidade(0, 100))