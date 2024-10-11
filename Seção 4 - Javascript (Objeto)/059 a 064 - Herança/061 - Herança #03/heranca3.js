const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

const filha3 = Object.create(pai, {
    nome: {
        value: 'Lucas',
        writable: false,
        enumerable: false // não vai mostrar os atributos que vier por herança
    }
})

console.log(filha3.nome)
filha2.nome = 'Thiago'
console.log(`${filha3.nome} tem cabelo ${filha3.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log(Object.keys(filha3))

for (let key in filha2) {
    // hasOwnProperty - determina se um objeto tem uma propriedade com o nome especificado
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
}
