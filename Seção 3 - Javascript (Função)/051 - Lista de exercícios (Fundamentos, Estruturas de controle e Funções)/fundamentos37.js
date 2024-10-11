function progressaoAritmetica(numeroTermo, a1, razao) {
    const termos = []
    for (let n = 0; n < numeroTermo; n++) {
        termos.push(a1 + n * razao)
    }

    console.log(termos.toString().replaceAll(',', ', '))
    console.log('Soma: ' + (((a1 + termos.at(-1)) * numeroTermo) / 2))
}

function progressaoGeometrica(numeroTermo, a1, razao) {
    const termos = []
    for (let n = 0; n < numeroTermo; n++) {
        termos.push(a1 * razao ** n)
    }

    console.log(termos.toString().replaceAll(',', ', '))
    console.log('Soma: ' + ((a1 * ((razao ** numeroTermo) - 1)) / (razao - 1)))
}

progressaoAritmetica(10, 10, 15)
console.log('----------------');
progressaoGeometrica(10, 5, 3)
