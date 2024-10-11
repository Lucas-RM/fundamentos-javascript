const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
} // Objeto
console.log(quaseArray)


/** Definir (incluir) uma propriedade de um objeto.
 * 
 * Podemos definir algumas características para a propriedade:
 * Por exemplo, a propriedade pode ou não pode ser alterada, ficará ou não visível 
 * quando fizer Object.keys(), por exemplo.
 * 
 * Abaixo está sendo crida a propriedade 'toString' dentro do objeto 'quaseArray'.
 * 
 * O valor dessa propriedade é uma função que retornará um array de valores das 
 * propriedades enumeráveis ​​do objeto 'quaseArray'. 
 * 
 * Ou seja, estamos transformando um objeto em um array.
 * 
 * */ 
Object.defineProperty(quaseArray, 'toString' /* propriedade criada */, {
    value: function () { 
        return Object.values(this)
    },
    enumerable: false // não será listado
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)
