function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
}

// Forma mais declarativa
function simboloMais_maisDeclarativo(quantidade) {
    return '+'.repeat(quantidade)
}

console.log(simboloMais(2)) // retornará "++"
console.log(simboloMais(4)) // retornará "++++"

console.log()

console.log(simboloMais_maisDeclarativo(2)) // retornará "++"
console.log(simboloMais_maisDeclarativo(4)) // retornará "++++"
