// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // melhor não fazer isso (impactará todos os objetos)
const avo = {
    attr1: 'A'
} // 'avo' tem como protótipo o Object.prototype
const pai = {
    __proto__: avo,
    attr2: 'B',
    attr3: 'C'
}
const filho = {
    __proto__: pai,
    attr3: 'D'
}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing (sobrescrevendo)
}

// usando a palavra reserva 'super' para referenciar meu protótipo (carro).
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo a relação de protótipos
Object.setPrototypeOf(ferrari, carro) // estabeleci um relação de 'ferrari' com 'carro'. Agora 'ferrari' tbm é um 'carro'.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())