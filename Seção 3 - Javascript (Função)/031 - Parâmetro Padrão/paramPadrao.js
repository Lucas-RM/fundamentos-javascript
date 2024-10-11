// Essas estratégias são trabalhosas e pode gerar um bug no sistema.
// Como no caso da primeira estratégia quando se possou todos os valores zerados.

/* Estratégia 1 para gerar valor padrão */
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))


/* Estratégia 2, 3, 4 para gerar valor padrão */
// Caso não tivesse como escolher a versão do ES2015,
// escolheria essa pq é mais segura e robusta e vai trazer
// menos bugs para aplicação
function soma2(a, b, c) { 
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // [1 in arguments] - dentro de 'arguments' existe o índice 1 (b)
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


/* VALOR PADRÃO DO ES2015 */
// Forma mais adequada, pq está seguindo um recurso da linguagem
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
