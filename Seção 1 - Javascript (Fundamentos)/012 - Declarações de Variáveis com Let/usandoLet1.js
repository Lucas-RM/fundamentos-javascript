/** 
 * Variáveis Let tem escopo de bloco, mesmo não sendo uma função
 * o Let vai ter o escopo apenas dentro do bloco que ele esteja, 
 * ou seja, ele estará visível apenas dentro do bloco. 
 * 
 * Variáveis definidas com a palavra reservada var tem escopo:
 * Global, de Função.
 * 
 * Variáveis definidas com a palavra reservada let tem escopo:
 * Global, de Função e de Bloco.
 * 
 */


/** 
 * Embora que tenha o mesmo nome (numero), estão em escopos diferentes.
 * Então, os dois valores vão poder se coexistir.
 * 
 */
var numero = 1
{
    let numero = 2 
    console.log('dentro = ', numero) // 2
}
console.log('fora = ', numero) // 1

let numero1 = 1
{
    /**
     * Se existir uma variável em um escopo menor, 
     * o que tem preferência é o escopo menor.
     */
    let numero1 = 2 
    console.log('dentro(1) = ', numero1) // 2
}
console.log('fora(1) = ', numero1) // 1



var numero2 = 1 // Escopo mais abrangente 
{
    let numero3 = 2 // Escopo menor

    /**
     * Procurou se existia a variável 'numero2' no escopo menor.
     * Não tinha. Então, procurou no escopo maior (mais abrangente). 
     */
    console.log('dentro(2) = ', numero2) // 1 
}
console.log('fora(2) = ', numero2) // 1
