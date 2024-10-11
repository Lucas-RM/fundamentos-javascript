function buscarPalavrasSemelhantes(palavra, palavras) {
    // 'pro' está incluso na palavra 'programação'? Sim, então inclua a palavra 'programação' no novo array.
    return palavras.filter(p => p.includes(palavra))
}

function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []

    for (let palavra of palavras)
        if (palavra.includes(inicio))
            resultado.push(palavra)

    return resultado
}


console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])) // retornará ["javascript", "java"]

console.log()

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))