function impares(inicio = 0, fim = 100) {
    if (inicio > fim)[inicio, fim] = [fim, inicio]

    const numeros = Array.from({
        length: (fim - inicio) + 1
    }, (value, index) => inicio + index)

    console.log(numeros.filter(n => n % 2 === 1).toString().replaceAll(',', ', '))
}

impares()
impares(1, 50)
impares(19, 3)