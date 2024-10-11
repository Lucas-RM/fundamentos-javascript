// Função Factory é função que retorna um objeto

// Factory simples

function criarPessoa(/* Pode passar params */) {
    return { 
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
