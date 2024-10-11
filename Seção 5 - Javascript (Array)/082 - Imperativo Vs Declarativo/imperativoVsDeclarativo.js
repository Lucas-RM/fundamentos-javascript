/**
 * O Imperativo é forma que vamos ensinar alguém exatamente os passos que tem ser executado,
 * sem deixar sem detalhe faltando. O foco é como tem que ser feito e não o que tem ser feito.
 * 
 * Na abordagem Declarativa dizemos que tem ser feito e internamente as coisas vão sendo feitas.
 * 
 */



const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// select codigo, nome, email from Clientes where ativo = 1
/**
 * SQL é uma linguagem declarativa.
 * Está muita mais preocupado o que queremos, do que como o 
 * banco tem que fazer para obter os dados.
 * 
 * */ 
