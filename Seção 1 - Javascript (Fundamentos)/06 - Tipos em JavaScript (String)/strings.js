// string é uma cadeia de caracteres, delimitados por aspas simples '', aspas duplas "" ou por crase ``.

let escola = "Cod3r1"

console.log(escola.charAt(4)) // result: r
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // valor na tabela ASCII ou unicode
console.log(escola.indexOf('3')) // retorna o índice associado a string a ser pesquisada na string armazenada na variável escola 

console.log(escola.substring(1)) // retorna uma substring da variável escola pegando do índice 1 até o final da string.
console.log(escola.substring(0, 3)) // retorna uma substring da variável escola pegando do índice 0 até o 3 sem incluir o índice 3
console.log(escola.substring(0, escola.indexOf('.')))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/, 'e'))
console.log(escola.replace(/\w/g, 'e'))
escola = escola.concat('r')
console.log(escola.replaceAll('r', 'e'))

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))
console.log('Ana,Maria,Pedro'.split(/./)) // O '.' significa uma coisa especial no mundo da regex.
