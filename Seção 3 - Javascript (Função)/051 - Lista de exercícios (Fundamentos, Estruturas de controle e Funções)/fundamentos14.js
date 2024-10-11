function venderFruta(fruta) {
    switch (fruta) {
        case 'maça': return 'Não vendemos esta fruta aqui'
        case 'kiwi': return 'Estamos com escassez de kiwis'
        case 'melancia': return 'Aqui está, são R$3,00 reais o quilo'
        default: return 'Fruta Inválida'
    }
}

console.log(venderFruta('maça'))
console.log(venderFruta('kiwi'))
console.log(venderFruta('melancia'))
console.log(venderFruta('a'))