function conceituarNotas(notas) {
    const conceitos = []
    notas.forEach(nota => {
        if (nota >= 0 && nota <= 4.9) {
            conceitos.push('D')
        } else if (nota >= 5 && nota <= 6.9) {
            conceitos.push('C')
        } else if (nota >= 7 && nota <= 8.9) {
            conceitos.push('B')
        } else if (nota >= 9 && nota <= 10) {
            conceitos.push('A')
        } else {
            conceitos.push(`Nota [${nota}] Inválida`)
        }
    })

    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)
