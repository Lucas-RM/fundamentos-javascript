// Quando você tem somente um parâmetro juntamente com o operador rest. 
// Esse parâmetro se torna idêntico ao arguments. Por exemplo:

// Com arguments:

function funcao(par1, par2){
    console.log(arguments.length)
    console.log(arguments[2])
}
 
funcao(1,2,3,4,5) 
// saída esperada:
// 5
// 3

// Com único parâmetro e operador rest:

function funcao(...parametros){
    console.log(parametros.length)
    console.log(parametros[2])
}
 
funcao(1,2,3,4,5) 
// saída esperada:
// 5
// 3

/** Sobre ser ou não usado o arguments.
 * 
 * É mais comum usá-lo somente quando se quiser iterar sobre os parâmetros da função.
 * De forma geral, é melhor nomear os parâmetros de uma forma clara e se referir a eles diretamente.
 * Assim o código fica mais legível e de fácil entendimento.
 * 
 *  */
