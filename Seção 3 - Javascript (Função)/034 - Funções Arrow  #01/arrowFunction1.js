let dobro = function (a) {
    return 2 * a
}

// Função arrow é uma função anônima, então para chamar 
// ela depois tem que armazenar ela em uma variável.
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // 'return' implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())
