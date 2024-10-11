function fatorial(numero) {
    if (numero == 0) return 1
    else return numero * fatorial(numero - 1)
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(10))