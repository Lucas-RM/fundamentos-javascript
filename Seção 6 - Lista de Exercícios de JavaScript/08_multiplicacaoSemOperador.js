function multiplicar(multiplicando, multiplicador) {
    let produto = 0

    if (multiplicando < 0 || multiplicador < 0) return 'É aceito apenas números maiores ou iguais a zero'
    if (multiplicando === 0 || multiplicador === 0) return 0
    if (multiplicador === 1) return multiplicando

    for (let i = 0; i < multiplicador; i++) {
        produto += multiplicando
    }

    return produto
}

function multiplicar_OperadorTernario(multiplicando, multiplicador) {
    if (multiplicando < 0 || multiplicador < 0) return 'É aceito apenas números maiores ou iguais a zero'
    if (multiplicando === 0 || multiplicador === 0) return 0

    return multiplicando === 1 || multiplicador === 1 ?
        multiplicando : multiplicando + multiplicar_OperadorTernario(multiplicando, multiplicador - 1)
}

console.log(multiplicar(5, 5))
console.log(multiplicar(2, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(1, 7))
console.log(multiplicar(4, 1))

console.log()

console.log(multiplicar_OperadorTernario(5, 5))
console.log(multiplicar_OperadorTernario(2, 5))
console.log(multiplicar_OperadorTernario(0, 7))
console.log(multiplicar_OperadorTernario(1, 7))
console.log(multiplicar_OperadorTernario(4, 1))