function comparaStrings(string1, string2) {
    /* const ehIgual = []
    string1.toLowerCase().split('').forEach(c => ehIgual.push(string2.toLowerCase().includes(c)))
    string2.toLowerCase().split('').forEach(c => ehIgual.push(string1.toLowerCase().includes(c))) */

    return string1.toLowerCase().split('').every(c => string2.toLowerCase().includes(c)) &&
        string2.toLowerCase().split('').every(c => string1.toLowerCase().includes(c))
}

console.log(comparaStrings("Teste", "teste"))
console.log(comparaStrings('abcdf', 'dcbaf'))
console.log(comparaStrings('abcdf', 'dcbad'))
console.log(comparaStrings('abcd', 'dcbaf'))