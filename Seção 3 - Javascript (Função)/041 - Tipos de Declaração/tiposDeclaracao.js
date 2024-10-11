console.log(soma(3, 4))
// console.log(sub(3, 4)) (erro)
// console.log(sub(3, 4)) (erro)

// function declaration (comum)
function soma(x, y) {
    return x + y
}

// function expression (comum)
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression 
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
