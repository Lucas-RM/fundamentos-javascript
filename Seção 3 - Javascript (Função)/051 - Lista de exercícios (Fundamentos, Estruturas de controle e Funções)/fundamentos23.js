function calcularMedia(codigoAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    const media = (notas[0] * 4 + (notas[1] + notas[2]) * 3) / 10

    return `Código do Aluno: ${codigoAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${media < 5 ? 'Reprovado.' : 'Aprovado.'}`
}


console.log(calcularMedia(123, 2.8, 6, 3.5))
console.log(calcularMedia(123, 4, 6, 5))