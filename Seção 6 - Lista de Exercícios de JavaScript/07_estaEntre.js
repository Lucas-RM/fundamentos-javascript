function estaEntre(numero, minimo, maximo, incluso = false) {
    if (incluso) {
        return numero >= minimo && numero <= maximo
    } else {
        return numero > minimo && minimo < maximo
    }
}

function estaEntre_OperderdorTernario(numero, minimo, maximo, incluso = false) {
    return incluso ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}


console.log(estaEntre(10, 50, 100)) // retornará false
console.log(estaEntre(16, 100, 160)) // retornará false
console.log(estaEntre(3, 3, 150)) // retornará false
console.log(estaEntre(3, 3, 150, true)) // retornará true

console.log()

console.log(estaEntre_OperderdorTernario(10, 50, 100)) // retornará false
console.log(estaEntre_OperderdorTernario(16, 100, 160)) // retornará false
console.log(estaEntre_OperderdorTernario(3, 3, 150)) // retornará false
console.log(estaEntre_OperderdorTernario(3, 3, 150, true)) // retornará true