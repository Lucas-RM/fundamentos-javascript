function receberSomenteOsParesDeIndicesPares(array) {
    /**
     * map() - itera em cada item do array verificando se o typeof é diferente de 'number',
     * se for armazena 'true', senão armazena 'false' em um novo array.
     * 
     * reduce() - com array de 'true' e 'false' gerado pelo map(), o reduce() vai
     * comparar entre os elementos deste array se todos são verdadeiros 'true'. 
     * 
     */
     
    if (array.map(a => typeof a !== 'number' ? true : false)
        .reduce((res, valorAtual) => res && valorAtual)) return 'Array Inválido'

    return array.filter(a => array.indexOf(a) % 2 === 0).filter(n => n % 2 === 0)
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]