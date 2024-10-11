const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um novo elemento na última posição do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um novo elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removeu a partir do índice '3' (inclusive ele) UM elemento.
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // formou um novo array a partir do índice 2.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // formou um novo array a partir do índice 1 até o 4 (índice 4 não incluso).
console.log(algunsPilotos2)