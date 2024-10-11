function valorDoPlano(idade) {
    const valorFixo = 100

    if (idade > 0 && idade < 10) return 'R$' + (valorFixo + 80)
    else if (idade >= 10 && idade <= 30) return 'R$' + (valorFixo + 50)
    else if (idade > 30 && idade <= 60) return 'R$' + (valorFixo + 95)
    else if (idade > 60) return 'R$' + (valorFixo + 130)
    else return 'Idade Inválida'
}

console.log(valorDoPlano(9))
console.log(valorDoPlano(20))
console.log(valorDoPlano(35))
console.log(valorDoPlano(70))