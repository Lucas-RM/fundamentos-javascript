// Contexto Léxico é o contexto no qual as coisas 
// foram declaradas dentro da linguagem

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    /**
     * Não reescreveu a variável 'valor' declarada globalmente,
     * porque a variável valor que está dentro de exec(),
     * foi definida em outro Endereço de Memória e está em
     * outro contexto, no contexto da função - exec().
     */
    const valor = 'Local' // Declarada em outro endereço de memória.
    minhaFuncao() // Imprimiu 'Global', pq está função foi criada no contexto global.
}

exec()