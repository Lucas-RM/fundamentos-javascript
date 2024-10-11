Array.prototype.forEach2 = function(callback) {
    // acessando a instância de um array a partir do 'this'
    for (let i = 0; i < this.length /* aprovados.length */; i++) {
        callback(this[i], i, this) // nome, indice, array
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1} ${nome}`)
})
