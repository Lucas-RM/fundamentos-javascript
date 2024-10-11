// A função Math.abs(x) retorna o valor absoluto de um número "x"

function inverso(valor) {
    if (typeof valor === 'boolean') return !valor
    if (typeof valor === 'number') return -valor
    return `booleano ou número esperado, mas o parâmetro é tipo ${typeof valor}`
}


console.log(inverso(true)) // retornará false
console.log(inverso("6")) // retornará booleano ou número esperado, mas o parâmetro é tipo string
console.log(inverso(2000)) // retornará -2000
console.log(inverso(-2000)) // retornará 2000
console.log(inverso(0)) // retornará -0
console.log(inverso(-0)) // retornará 0
console.log(inverso("programação")) // retornará booleano ou número esperado, mas o parâmetro é tipo string

