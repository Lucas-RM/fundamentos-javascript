function removerVogais(frase) {
    const vogais = ['a', 'e', 'i', 'o', 'u']

    return [...frase].filter(c => !vogais.includes(c.toLowerCase())).join('')
}

function removerVogais2(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase
}

function removerVogais3(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais("COd3r")) // retornará "Cd3r"
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts"

console.log(removerVogais2("COd3r"))
console.log(removerVogais2("Fundamentos"))

console.log(removerVogais3("COd3r"))
console.log(removerVogais3("Fundamentos"))