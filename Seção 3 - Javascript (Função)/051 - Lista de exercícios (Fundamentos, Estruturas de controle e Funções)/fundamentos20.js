function sacarDinheiro(valor) {
    const cedulas = [100, 10, 50, 1].sort((a, b) => b - a)
    const qtdCedulas = []
    let resultado = ''

    cedulas.forEach((cedula, i) => {
        qtdCedulas.push(calcularQtdCedulas(valor, cedula))
        valor -= (cedula * qtdCedulas[i])

        if (qtdCedulas[i] > 0) {
            resultado += `${qtdCedulas[i]} nota(s) de R$ ${cedula.toString()}. `
        }
    })

    return resultado
}

function calcularQtdCedulas(valor, cedula) {
    return (valor / cedula >= 1) ? parseInt(valor / cedula) : 0
}

console.log(sacarDinheiro(1000))
console.log(sacarDinheiro(150))
console.log(sacarDinheiro(90))
console.log(sacarDinheiro(153))
console.log(sacarDinheiro(1051))
console.log(sacarDinheiro(1351))

/**
 * `numeros.sort((a, b) => b - a);`: Esta linha ordena os elementos do array 
 * 'numeros' em ordem decrescente. Aqui está o que está acontecendo dentro do 
 * método sort:
 * 
 * - sort é um método de array em JavaScript que ordena os elementos do array 
 * in-place e retorna o array ordenado.
 * 
 * - Ele aceita um argumento opcional que é uma função de comparação. Nesse caso,
 *  uma função de comparação é fornecida como uma arrow function (a, b) => b - a).
 * 
 * - Esta função de comparação compara dois elementos `a` e `b` do array.
 * 
 * - Se `b - a` for negativo, `a` é colocado antes de `b` (em ordem ascendente).
 * 
 * - Se `b - a` for positivo, `b` é colocado antes de `a` (em ordem decrescente).
 * 
 * - Se `b - a` for zero, `a` ordem entre `a` e `b` não é alterada.
 * 
 */


