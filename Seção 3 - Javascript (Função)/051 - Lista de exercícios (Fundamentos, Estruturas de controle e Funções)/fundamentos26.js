function pares(listaNumeros) {
    const somentePares = []
    listaNumeros.forEach(numero => {
        if (numero % 2 === 0) somentePares.push(numero)
    })

    return somentePares.toString().replaceAll(',', ', ')
}

const numeroInicial = 1
const numeroFinal = 100
const numeros = Array.from({ length: (numeroFinal - numeroInicial) + 1 }, (value, index) => numeroInicial + index)

console.log(pares(numeros))
