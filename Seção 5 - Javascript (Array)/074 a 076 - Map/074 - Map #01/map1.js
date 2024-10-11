/**
 * Map() - percorre cada um dos elementos do array e o resultado é 
 * um outro array do mesmo tamanho com a transformação de seus dados. 
 * 
 * */


const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

resultado = nums.map(function (e) {
    return e > 2 ? true : false
})

console.log(resultado)

const soma10 = e => e + 10
const tripo = e => e * 3
const paraDinheiro = e => `${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)
console.log(resultado)