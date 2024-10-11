/**
 * Se tratando de Var (variável), variável tem dois escopos possíveis:
 * Nível Global (visível na aplicação inteira) falando mais no ponto de vista 
 * do Browser do que propriamente do Node. Porque o Node tem um sistema de módulos e,
 * cada arquivo é um módulo e varia um pouco sobre isso.
 * 
 * Na forma geral:
 * 
 * Criamos variáveis Globais ou criamos variáveis no escopo de função -> teste() -- var local = 123
 * 
 */

{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera);
            }
        }
    }
}

console.log(sera);


function teste() {
    // Variável 'local' no escopo de função
    var local = 123
    console.log(local);
}

teste()
// console.log(local) (erro: Variável 'local' está definida no escopo da função teste() e não Globalmente)

