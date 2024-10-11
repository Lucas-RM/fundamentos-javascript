function checarAnoBissexto(ano) {
    const naoEhAnoBissexto = "false, pois é múltiplo de 100 e não é múltiplo de 400."

    if (ano <= 0) return false
    else if (ano % 400 === 0) return true
    else if (ano % 100 === 0) return naoEhAnoBissexto
    else if (ano % 4 === 0) return true
    
    return "false, pois não é múltiplo de 400 e nem múltiplo de 4."
}

function checarAnoBissexto2(ano) {
    if (ano <= 0) return false

    const divisivelPorQuatro = ano % 4 === 0
    const divisivelPorCem = ano % 100 === 0
    const divisivelPorQuatrocentos = ano % 400 === 0
    
    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto3(ano) {
    return new Date(ano, 1, 29).getDate() === 29
}


console.log(checarAnoBissexto(0)) // retornará false
console.log(checarAnoBissexto(2020)) // retornará true
console.log(checarAnoBissexto(2100)) // retornará false, po is é múltiplo de 100 e não é múltiplo de 400.
console.log(checarAnoBissexto(2021)) // retornará false, pois não é múltiplo de 400 e nem múltiplo de 4. 
console.log(checarAnoBissexto(2023)) // retornará false, pois não é múltiplo de 400 e nem múltiplo de 4.
console.log(checarAnoBissexto(2024)) // retornará true

console.log()

console.log(checarAnoBissexto2(0)) // false
console.log(checarAnoBissexto2(2021)) // false
console.log(checarAnoBissexto2(2023)) // false
console.log(checarAnoBissexto2(2024)) // true

console.log()

console.log(checarAnoBissexto3(0))
console.log(checarAnoBissexto3(2021))
console.log(checarAnoBissexto3(2023))
console.log(checarAnoBissexto3(2024))