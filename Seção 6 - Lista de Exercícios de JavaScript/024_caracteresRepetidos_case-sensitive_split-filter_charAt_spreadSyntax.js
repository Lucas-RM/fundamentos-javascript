function contarCaractere(caractere, string) {
    return string.split('').filter(s => s === caractere).length
}

function contarCaractere2(caractereBuscado, frase) {
    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === caractereBuscado)
            contador++
    }

    return contador
}

function contarCaractere3(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}

console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornará 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornará 1

console.log()

console.log(contarCaractere2("r", "A sorte favorece os audazes")) // retornará 2
console.log(contarCaractere2("c", "Conhece-te a ti mesmo")) // retornará 1

console.log()

console.log(contarCaractere3("r", "A sorte favorece os audazes")) // retornará 2
console.log(contarCaractere3("c", "Conhece-te a ti mesmo")) // retornará 1