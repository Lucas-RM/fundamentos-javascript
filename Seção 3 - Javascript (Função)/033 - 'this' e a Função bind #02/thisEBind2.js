function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)

    // Em funções arrow o 'this' não varia, ou seja,
    // o 'this' continua no mesmo contexto.
    /*setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)*/
}

new Pessoa
