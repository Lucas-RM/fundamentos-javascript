// Getters e Setters são funções em que dentro destas funções os valores são acessados.
// A vantagem de acessar um valor em cima de uma função é que podemos fazer validações,
// algum tipo de processamento antes de retornar o valor da variável.

/**
 * O JavaScript não aceita (não suporta) sobrecarga de métodos.
 * Ou seja, ele não aceita ter vários métodos com o mesmo nome, 
 * mas com parâmetros diferentes.
 * 
 * A não ser no exemplo abaixo usando Get e Set, que utiliza o mesmo nome e internamente 
 * ele entende que se trata de dois métodos diferentes.
 * 
 */

const sequencia = {
    _valor: 1, // não quer dizer que é uma variável privada. Isso é uma Convenção dos Devs

    get valor() {
        return this._valor++ // O incremento é feito depois do valor ser retornado.
    },

    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor)
// Object.freeze(sequencia) não funciona

sequencia.valor = 10
console.log(sequencia.valor) // imprimiu 10 -> 11 
console.log(sequencia.valor) // imprimiu 11 -> 12
console.log(sequencia.valor) // imprimiu 12 -> 13
