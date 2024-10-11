function funcaoDaSorte(numero) {
    const min = 1, max = 10
    const numeroSorteado = Math.floor((Math.random() * (max - min + 1) + min))

    return numeroSorteado === numero ?
        `Parabéns, O número sorteado foi o ${numeroSorteado}.` :
        `"Que pena! O número sorteado foi o ${numeroSorteado}.`
}

console.log(funcaoDaSorte(10)) // retornará "Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o X"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o X"