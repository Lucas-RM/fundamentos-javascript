function menorNumero(numeros) {
    return numeros.length === 0 ? "Números Inválidos" : numeros.reduce((menor, numeroAtual) => Math.min(menor, numeroAtual), numeros[0])
}

function menorNumero2(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

function menorNumero3(numeros) {
    /**
     * Sintaxe de Espalhamento (Spread syntax) permite que 
     * um objeto iterável, como uma expressão de array ou 
     * uma string seja expandido para ser usado onde zero ou 
     * mais argumentos (para chamadas de funções) ou elementos 
     * (para arrays literais) são esperados, ou que um objeto 
     * seja expandido onde zero ou mais pares propriedade:valor 
     * (para objetos literais) são esperados.
     *      * 
     * function myFunction(x, y, z) {}
     * var args = [0, 1, 2]
     * myFunction(...args)
     * 
     */

    return Math.min(...numeros)
}
    
    

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15
console.log(menorNumero([2, 2, 2, 2, 2])) // retornará 2

console.log()

console.log(menorNumero2([10, 5, 35, 65])) // retornará 5
console.log(menorNumero2([5, -15, 50, 3])) // retornará -15
console.log(menorNumero2([2, 2, 2, 2, 2])) // retornará 2

console.log()

console.log(menorNumero3([10, 5, 35, 65])) // retornará 5
console.log(menorNumero3([5, -15, 50, 3])) // retornará -15
console.log(menorNumero3([2, 2, 2, 2, 2])) // retornará 2