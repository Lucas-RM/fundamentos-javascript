const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false }, 
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
let resultado = alunos.map(a => a.bolsista).reduce(function(acc, cur) {
    console.log(acc, cur)
    return acc && cur
})
console.log(resultado)

console.log()

// Desafio 2: Algum aluno é bolsista?
resultado = alunos.map(a => a.bolsista).reduce(function(acc, cur) {
    console.log(acc, cur)
    return acc || cur
})
console.log(resultado)



// RESPOSTA AULA
console.log("\n\nRESPOSTA AULA\n")

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

console.log()

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
