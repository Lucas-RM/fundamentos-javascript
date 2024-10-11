function calcularReajuste(plano, salario) {
    switch (plano) {
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.2
        default:
            return 'Plano Inválido'
    }
}

console.log(calcularReajuste('A', 1200))
console.log(calcularReajuste('B', 12235))
console.log(calcularReajuste('C', 5346))
console.log(calcularReajuste('D', 5346))