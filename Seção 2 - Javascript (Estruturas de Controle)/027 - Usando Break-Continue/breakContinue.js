/**
 * As palavras reservadas 'break' e 'continue' causa um Desvio de Fluxo.
 * 
 * Desvio de Fluxo é sair de um ponto e pular algumas linhas e ir para outro ponto.
 * 
 * Break influência no bloco do tipo switch, dentro de um laço for e while.
 * 
 * Continue influência dentro de um laço for e while.
 * 
 * Tente o máximo evitar a usar essas palavras dentro de seu código,
 * porque ficar desviando o fluxo ás vezes pode trazer mais confusão do clareza.
 * [época do código 'Goto' (Código não estruturado), ficava encontrando o goto e 
 * ficava desviando o fluxo para outros lugares da aplicação]
 * 
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) break
    console.log(`${x} = ${nums[x]}`)
}

console.log('')

for (let y in nums) {
    if (y == 5) continue
    console.log(`${y} = ${nums[y]}`)
}

console.log('')

// Não utilize esse tipo de estrutura: rótulo
externo:
for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par ${a}, ${b}`)
    }
}