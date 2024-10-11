function classificacaoTriangulo (tamanhoLado1, tamanhoLado2, tamanhoLado3) {
    if (tamanhoLado1 === tamanhoLado2 && tamanhoLado2 === tamanhoLado3) {
        return 'Equilátero'
    } else if (tamanhoLado1 === tamanhoLado2 || tamanhoLado1 === tamanhoLado3 || tamanhoLado2 === tamanhoLado3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificacaoTriangulo(7, 7, 7))
console.log(classificacaoTriangulo(7, 7, 8))
console.log(classificacaoTriangulo(6, 7, 8))
