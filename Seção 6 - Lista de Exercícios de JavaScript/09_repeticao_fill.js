function repetir(elemento, quantidade) {
    const repeticoes = []
    for (let i = 0; i < quantidade; i++) {
        repeticoes.push(elemento)
    }
    return repeticoes
}

// Forma mais declarativa
function repetir_declarativo(item, quantidade) {
    return Array(quantidade).fill(item)
}

console.log(repetir("código", 2)) // retornará ["código", "código"]
console.log(repetir(7, 3)) // retornará [7, 7]

console.log()

console.log(repetir_declarativo("código", 2)) // retornará ["código", "código"]
console.log(repetir_declarativo(7, 3)) // retornará [7, 7]
