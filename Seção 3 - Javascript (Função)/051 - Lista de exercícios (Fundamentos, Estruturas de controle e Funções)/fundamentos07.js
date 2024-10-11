function formulaDeBhaskara(a, b, c) {
    const delta = (b ** 2) - (4 * a * c)
    if (delta < 0) return 'Delta é negativo'

    const raizes = []
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a)

    raizes.push(raiz1)
    raizes.push(raiz2)

    return raizes
}

console.log(formulaDeBhaskara(3, -5, 12))
console.log(formulaDeBhaskara(1, 3, 2))
console.log(formulaDeBhaskara(3, 1, 2))