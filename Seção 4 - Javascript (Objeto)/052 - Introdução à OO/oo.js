// CÓDIGO NÃO EXECUTÁVEL!!!

// Antigamente era GOTwo. Agora temos Linguagens Procedurais (foco em funções - procedimento)
// Funções que manipulam dados
processamento(valor1, valor2, valor3)

/* Conceito em OO */
// A ideia de ter o paradigma de OO é para que possamos estar mais próximo do mundo real
// Em OO dentro dos dados que tem funções
// Os objetos funcionam como essa capsula que agrupa comportamentos e atributos.
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}

objeto.processamento() // Foco passou a ser o objeto

// Princípios importantes: 
// 1. abstração
// 2. encapsulamento
// 3. herança (prototype)
// 4. polimorfismo


// 1 - Abstração é pegar um objeto do mundo real e entender como traduzir esse objeto para dentro do seu sistema.
/** Exemplo: Objeto Carro 
 * O carro tem atributos peso, largura, altura, comprimento, velocidade máxima, velocidade atual,
 * método ligar, método desligar, etc. 
 * 
*/


// 2 - Encapsulamento é ter os detalhes de implementação escondidos e você mostrar que precisa usar aquele sistema
// uma interface simples para que possam interagir com determinado objeto.
/** Exemplo: Objeto Carro 
 * Para usar um carro precisamos aprender a trabalhar com a direção, com a marcha, a ligar o carro, entender que 
 * depois de um tempo precisa colocar gasolina no carro, etc.
 * 
 * Mas como o combustível é queimado dentro do motor, como funciona as válvulas do carro, porque um carro tem mais
 * cavalos e outro menos. Esse tipo de informação (dado) fica escondido (encapsulado dentro do objeto carro).
 * 
 */

// 3 - Herança (princípio baseado numa relação 'é um') é receber atributos/características e comportamentos de um objeto 'pai'
// Priorize a Composição (a relação 'tem um') ao véz de Herança (muitas vezes podem trazer confusão dentro dos códigos).
/** Exemplo: Objeto Carro
 * Não preciso colocar a complexidade do motor dentro do objeto carro. 
 * Posso simplesmente dizer que o carro tem um motor (a complexidade motor estará dentro do objeto motor).
 * Posso quebrar a complexidade do objeto motor em partes menores.
 * O motor com outros objetos menores geram o Carro.
 * 
 * Assim geramos objetos complexos a partir da composição de objetos mais simples. 
 * Essa é uma forma de reuso de código. Não precisamos escrever aquilo que é do motor dentro do carro.
 *  
 */

// 4 - Polimorfismo significa múltiplas formas.
/** Exemplo: Celular
 * Celular é um conceito genérico (abstrato). Pode ser um Iphone, Galaxy, Moto Z.
 * A partir do conceito genérico podemos substituir por objetos concretos (linguagens tipadas). 
 * 
 * Conceito genérico de Carro e uma hora esse carro aponta para uma ferrari, depois substituir por um Uno.
 * Podemos substituir diferentes conceitos concretos e trabalhar a partir de um conceito mais abstrato.
 * 
 */
