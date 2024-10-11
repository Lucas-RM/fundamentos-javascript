function numeroPorExtenso(numero) {
    switch (numero) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo.'
    }
}

console.log(numeroPorExtenso(0))
console.log(numeroPorExtenso(1))
console.log(numeroPorExtenso(2))
console.log(numeroPorExtenso(3))
console.log(numeroPorExtenso(4))
console.log(numeroPorExtenso(5))
console.log(numeroPorExtenso(6))
console.log(numeroPorExtenso(7))
console.log(numeroPorExtenso(8))
console.log(numeroPorExtenso(9))
console.log(numeroPorExtenso(10))
console.log(numeroPorExtenso(11))