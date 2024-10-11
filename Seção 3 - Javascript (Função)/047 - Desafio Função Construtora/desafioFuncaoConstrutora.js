function Pessoa(nome) {
    this.nome = nome // propriedade 'nome' se torna pública

    this.falar = function () {
        console.log(`Meu nome é ${nome /* this.nome */}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome) // 'João'


// Sem acesso a propriedade 'nome'
function Pessoa2(nome) {
    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new Pessoa2('João')
p2.falar()
console.log(p2.nome) // undefined
