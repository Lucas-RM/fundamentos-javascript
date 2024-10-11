function calculadora (numero1, operacao, numero2) {
    switch (operacao) {
        case '+': case 'soma': return numero1 + numero2
        case '-': case 'subtracao': return numero1 - numero2
        case '*': case 'multiplicacao': return numero1 * numero2
        case '/': case 'divisao': return numero1 / numero2
        default: return 'Operação Inválida'
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(1, '/', 0))
console.log(calculadora(0, '/', 1))
console.log(calculadora(0, 'x', 1))
