/**
 * 
 * Esse código em JavaScript cria um array contendo uma sequência de números inteiros, 
 * começando a partir de um valor inicial (@param {*} inicio) e terminando em um valor 
 * final (@param {*} fim).
 * 
 * - `Array.from` é um método estático do objeto Array em JavaScript, usado para criar 
 * uma nova instância de um array a partir de um objeto semelhante a um array (ou iterável).
 * 
 * `@argument { length: (fim - inicio) + 1 }`: Este é o primeiro argumento passado para 
 * @method Array.from. Ele define o comprimento do novo array a ser criado. 
 * O comprimento é determinado subtraindo o valor inicial (@param inicio) do 
 * valor final (@param fim), e então adicionando 1. Isso garante que o array inclua 
 * todos os números de inicio a fim, inclusive.
 * 
 * `@argument { (value, index) => inicio + index }`: Este é o segundo argumento passado 
 * para @method Array.from. Ele é uma função de mapeamento que especifica como cada elemento
 * do novo array será calculado. Aqui, @param value representa cada elemento do array 
 * (embora não seja usado neste caso), e @param index representa o índice desse elemento no array. 
 * A expressão inicio + index é usada para calcular o valor de cada elemento do array. 
 * Basicamente, inicio é somado ao índice atual, resultando em uma sequência de números começando
 * de inicio e indo até fim.
 * 
 */


function intervaloDeNumeros(inicio, fim) {
    if (inicio > fim)[inicio, fim] = [fim, inicio]
    return Array.from({
        length: (fim - inicio) + 1
    }, (value, index) => inicio + index).toString()
}

console.log(intervaloDeNumeros(1, 50))
console.log(intervaloDeNumeros(-1, -10))