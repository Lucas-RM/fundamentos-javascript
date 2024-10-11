function real(valor) {
    const valorString = valor.toString()
    const valorComVirgula = valorString.substring(0, (valorString.indexOf('.') === -1 ? valorString.length : valorString.indexOf('.')))
    const valorComPonto = valorString.indexOf('.') === -1 ? null : valorString.substring(valorString.indexOf('.'))
    const valorComDoisDecimais = valorComPonto === null ? '' : parseFloat(valorComPonto).toFixed(2).substring(1)

    return 'R$ ' + valorComVirgula.replaceAll(',', '.').concat(valorComDoisDecimais.replaceAll('.', ','))
}

console.log(real(0.1 + 0.2))
console.log()
console.log(real(1200.54))
console.log()
console.log(real("1,200,200.04540"))
console.log()
console.log(real("1,200.0"))
console.log()
console.log(real(0.30000000000000004))