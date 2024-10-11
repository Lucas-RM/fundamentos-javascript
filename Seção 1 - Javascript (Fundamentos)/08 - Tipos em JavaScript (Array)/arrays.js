const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // deleta o último elemento do array
delete valores[0] // delete - uma função que funciona no contexto de objeto para tirar um atributo de dentro de um objeto
console.log(valores)

console.log(typeof valores)
