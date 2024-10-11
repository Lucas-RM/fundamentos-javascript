function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDeDigitos) {
    return numeros.filter(n => n.toString().length === quantidadeDeDigitos)
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]
