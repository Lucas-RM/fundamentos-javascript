let vetorInteiro = [10, 20, 30, 40, 50, 60]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [10.5, 20.5, 30.5, 40.5, 50.5, 60.5]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
