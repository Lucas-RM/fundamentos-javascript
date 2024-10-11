function calcularMedia(numeros) {
    return numeros.reduce((total, valorAtual) => total + valorAtual, 0) / numeros.length
}

console.log(calcularMedia([0, 10])) // retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5])) // retornará 3
