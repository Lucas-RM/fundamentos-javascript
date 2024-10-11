function maiorOuIgual(num1, num2) {
    return typeof num1 == 'number' && typeof num2 == 'number' ? num1 >= num2 : false
}

console.log(maiorOuIgual(0, 0)) // retornará true
console.log(maiorOuIgual(0, "0")) // retornará false
console.log(maiorOuIgual(5, 1)) // retornará true