function somarNumeros(array) {
    return array.reduce((acc, cur) => acc + cur, 0)
}

function somarNumeros2(numeros) {
    /**
     * O método slice() retorna uma cópia de parte de um array 
     * a partir de um subarray criado entre as posições início 
     * e fim (fim não é incluído) de um array original. 
     * O Array original não é modificado.
     * 
     * [1, 2, 3, 4, 5].slice(1) = [2, 3, 4, 5]
     * 
     */

    return (numeros.length === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

function somarNumeros3(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)

    return soma
}

console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60
console.log(somarNumeros([])) // retornará 0

console.log()

console.log(somarNumeros2([10, 10, 10])) 
console.log(somarNumeros2([15, 15, 15, 15])) 
console.log(somarNumeros2([]))

console.log()

console.log(somarNumeros3([10, 10, 10])) 
console.log(somarNumeros3([15, 15, 15, 15])) 
console.log(somarNumeros3([]))
