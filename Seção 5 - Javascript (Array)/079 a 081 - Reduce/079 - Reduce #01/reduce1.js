/**
 * O método reduce() executa uma função reducer (fornecida por você) 
 * para cada elemento do array, resultando num único valor de retorno.
 * 
 * A função reducer recebe quatro parâmetros:
 * - Acumulador (acc)
 * - Valor Atual (cur)
 * - Index Atual (idx)
 * - Array original (src)
 * 
 * O valor de retorno da sua função reducer é atribuída ao acumulador. 
 * O acumulador, com seu valor atualizado, é repassado para cada iteração 
 * subsequente pelo array, que por fim, se tornará o valor resultante, único, final.
 * 
 * PARÂMETROS
 * Callback: Função que é executada em cada valor no array (exceto no primeiro, 
 * se nenhum valorInicial for passado); recebe quatro argumentos:
 * 
 * - acumulador: É o valor inicial (ou o valor do callback anterior). 
 *               Este valor inicia com o valorInicial e será retornado na última iteração.
 * 
 * - valorAtual: Opcional. O índice do elemento atual que está sendo processado no array. 
 *               Começa a partir do index 0 se um valorInicial for fornecido. 
 *               Do contrário, começa do index 1.
 * 
 * - valorInicial: Opcional. Valor a ser usado como o primeiro argumento da primeira chamada 
 *                 da função callback. Se nenhum valorInicial é fornecido, o primeiro elemento 
 *                 do array será usado como o valor inicial do acumulador e o valorAtual não 
 *                 será lido. Chamar reduce() em uma array vazia sem valor inicial retornará um erro.
 * 
 * - Valor Retornado: O valor que resulta da execução da função de callback do "reducer" 
 *                    até a conclusão de todo o array.
 * 
 * O método reduce() executa a função de callback uma vez para cada elemento presente no array, 
 * excluindo furos (valores indefinidos), recebendo quatro argumentos:
 * 
 * 1. acumulador - valor inicial (ou o valor do callback anterior),
 * 2. valorAtual - o valor do elemento atual
 * 3. index - o índice atual e
 * 4. array - o array onde a iteração está ocorrendo.
 * 
 * A primeira vez que o callback é chamado, o acumulador e o valorAtual podem ter um de dois 
 * valores possíveis. Se o valorInicial tiver sido fornecido na chamada à função reduce(),então 
 * o acumulador será igual ao valorInicial e o valorAtual será igual ao primeiro valor no array. 
 * Caso nenhum valorInicial seja fornecido, acumulador será igual ao primeiro valor no array, e 
 * valorAtual será igual ao segundo.
 * 
 * Se a array estiver vazia e o valorInicial não tiver sido informado, uma exceção do tipo 
 * TypeError será lançada.
 * 
 * Se a array possuir somente um elemento (independente da posição) e o valorInicial não 
 * tiver sido fornecido, ou se valorInicial for fornecido, mas a array estiver vazia, 
 * o valor será retornado sem que a função de callback seja chamada.
 * 
 * É mais seguro prover um valorInicial, porque existem até quatro possíveis saídas sem 
 * o valorInicial, como mostrado no exemplo:
 * 
 */

var maxCallback = (acc, cur) => Math.max(acc.x, cur.x)
var maxCallback2 = (max, cur) => Math.max(max, cur)

// reduce() sem valores iniciais
console.log([{ x: 22 }, { x: 42 }].reduce(maxCallback)) // 42
console.log([{ x: 22 }].reduce(maxCallback)) // { x: 22 }
// console.log([].reduce(maxCallback)) // TypeError

// map/reduce; melhor solução, funciona para vetores vazios e também para vetores grandes
//[{ x: 22 }, { x: 42 }].map((el) => el.x).reduce(maxCallback2, -Infinity)
console.log("\n\nAULA\n\n")

// AULA

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false }, 
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))

// como não passei o valorInicial para a função reduce(), ela começou com 0 e somou com a nota 7.3 (valorAtual)
let resultado = alunos.map(a => a.nota).reduce(function(acumulador, valorAtual) { 
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
})
console.log(resultado)

console.log()

// Aqui eu passei o valorInicial '10'. Logo ele pegou o valorAtual '7.3' e somou com valor do acumulador '10'.
resultado = alunos.map(a => a.nota).reduce(function(acumulador, valorAtual) { 
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, 10)
console.log(resultado)
