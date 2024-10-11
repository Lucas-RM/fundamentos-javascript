function filtrarNumeros(array) {
    return array.filter(a => typeof a === 'number')
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20]
console.log(filtrarNumeros(["a", "c"])) // retornará []
