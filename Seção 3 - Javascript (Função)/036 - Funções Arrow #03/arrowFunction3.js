let comparaComThis = function (param) {
    console.log('this: ' + this)
    console.log('param: ' + param)
    console.log(this === param)
    console.log()
}

comparaComThis(global) // true { global === global }
comparaComThis(this) // false { global === module.exports }


const obj = {}
console.log('\n--> Bind(obj) <--')
console.log(`> this (obj) = ${obj}\n`)
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global) // false { (obj) [this] === [param] global }
comparaComThis(this) // false { (obj) [this] === [param] (module.exports)} 'this' não é o 'this'
comparaComThis(module.exports) // false - 'this' não é o 'this'
comparaComThis(obj) // true { (obj) [this] === [param] (obj) }


console.log('\n--> Arrow Function <--')
let comparaComThisArrow = param => {
    console.log('this: ' + this)
    console.log('param: ' + param)
    console.log(this === param)
    console.log()
}
comparaComThisArrow(global) // false { (module.exports) [this] === [param] (global) }
comparaComThisArrow(this) // true { (module.exports) [this] === [param] (module.exports) }
comparaComThisArrow(module.exports) // true 


// A Arrow Function é mais forte que o bind().
// O 'this' continua o mesmo - module.exports
console.log('\n--> Arrow Function - Bind(obj) <--')
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global) // false
comparaComThisArrow(this) // true
comparaComThisArrow(module.exports) // true
comparaComThisArrow(obj) // false
