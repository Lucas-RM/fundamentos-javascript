function removerPropriedade(objeto, propriedade) {
    /**
     * O método Object.assign() é usado para copiar os valores de todas as propriedades
     * próprias enumeráveis de um ou mais objetos de origem para um objeto destino. 
     * Este método irá retornar o objeto destino.
     * 
     */

    const copia = Object.assign({}, objeto)
    delete copia[propriedade]

    return copia
}

function removerPropriedade2(objeto, propriedade) {
    const copia = {...objeto}
    delete copia[propriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a")) // retornará {b: 2}
console.log(removerPropriedade({
    id: 20, 
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao")) // retornará {id: 20, nome: "caneta"}


console.log(removerPropriedade2({a: 1, b: 2}, "a")) // retornará {b: 2}
console.log(removerPropriedade2({
    id: 20, 
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao")) // retornará {id: 20, nome: "caneta"}

console.log()

console.log(Object.is(removerPropriedade({a: 1, b: 2}, "a"))) // retornará {b: 2}
console.log(Object.is(removerPropriedade({
    id: 20, 
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))) // retornará {id: 20, nome: "caneta"}
