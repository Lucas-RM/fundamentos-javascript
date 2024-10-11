const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // duplicidade
const obj2 = { a, b, c } // como é realizado atualmente
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // criar um atributo a partir do valor de uma variável
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() { // function expression
        // função anônima 
    },
    funcao2() { // forma reduzida
        // ...
    }
}

console.log(obj5)
