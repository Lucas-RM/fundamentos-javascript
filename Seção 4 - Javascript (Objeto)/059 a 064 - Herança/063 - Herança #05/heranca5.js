// Os três tem o atributo 'prototype'. Porque toda função tem um atributo chamado 'prototype'
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    // O array tem a função 'reverse' que faz com que todos os elementos sejam invertidos.
    return this.split('').reverse().join('') // join() - juntar todos os elementos
}

console.log('Escola Cod3r'.reverse())

// retornar primeiro elemento do array
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Sobrescrevendo a função 'toString' (NÃO FAÇA ISSO!!!)
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())
// O que acontece é que interna e implicitamente o console.log() utiliza o toString()!
