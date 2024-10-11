/**
 * IIFE significa Immediately Invoked Function Expression no caso, 
 * funções imediatamente invocadas, também conhecidas como 
 * Self-Executing Anonymous Function.
 * 
 * Dessa forma é basicamente uma função anônima com uma pequena particularidade, 
 * ela invocada exatamente após ser criada, diferente de uma função anônima simples, 
 * a qual deve ser invocada explicitamente.
 * 
 * Um uso muito comum de IIEF é no desenvolvimento de bibliotecas. 
 * De forma que as variáveis/funções internas criadas na biblioteca 
 * não entrem em conflito com as que o programador criou. 
 * 
 */

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    //console.log('Mudando o contexto da função com bind()')
    console.log(this == global)
}) /*.bind(module.exports)*/ ()