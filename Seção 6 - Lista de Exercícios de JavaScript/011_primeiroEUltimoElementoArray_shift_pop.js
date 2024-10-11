function receberPrimeiroEUltimoElemento(array) {
    return [array.shift(), array.pop()]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"])) // retornará [7, 14, "olá"]
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])) // retornará [-100, "aplicativo", 16]
