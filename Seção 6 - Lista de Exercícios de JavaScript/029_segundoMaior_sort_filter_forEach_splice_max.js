function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => b - a)

    if (numerosOrdenados[0] > numerosOrdenados[1]) return numerosOrdenados[1]

    return numerosOrdenados.filter(n => n < numerosOrdenados[1])[0] ?? "Todos os números são iguais."
}

function segundoMaior2(numeros) {
    let indiceDoMaior = 0
    let segundoMaior

    numeros.forEach((numero, indice) => {
        if (numero > numeros[indiceDoMaior])
            indiceDoMaior = indice
    })

    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]

    numeros.forEach(numero => {
        if (numero > segundoMaior)
            segundoMaior = numero
    })

    return segundoMaior
}

function segundoMaior3(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)

    return segundoMaior
}


console.log(segundoMaior([12, 12, 12, 1, 5])) // retornará 5
console.log(segundoMaior([12, 12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([12, 16, 16, 1, 5])) // retornará 12
console.log(segundoMaior([16, 16, 16, 16, 16])) // retornará Todos os números são iguais.
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6

console.log()

console.log(segundoMaior2([12, 12, 16, 1, 5]))
console.log(segundoMaior2([8, 4, 5, 6]))

console.log()

console.log(segundoMaior3([12, 12, 16, 1, 5]))
console.log(segundoMaior3([8, 4, 5, 6]))