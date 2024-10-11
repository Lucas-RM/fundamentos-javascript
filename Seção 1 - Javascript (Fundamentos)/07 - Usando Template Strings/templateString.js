const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

// Arrow Function
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
