/**
 * A função funciona como uma classe (um molde) e a partir desse
 * molde podemos criar objetos. E o dado interno da função pertence
 * a cada um dos objetos, mesmo sendo um dado privado ou pertencente 
 * ao 'this' (público). 
 * 
 */ 

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // método publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // function
console.log(typeof new Carro) // object
console.log(typeof ferrari) // object