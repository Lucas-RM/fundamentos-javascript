const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

/**
 * O fato de armazenar uma função numa variável, neste contexto
 * que está chamando direto a função, não estamos chamando a função 
 * 'falar()' a partir do contexto 'pessoa'.
 * 
 * falar() chamado diretamente de uma função do Node ele está em outro
 * contexto e por isso ocorre um problema do 'this'.
 * 
 */
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

/** 
 * Bind no inglês significa amarrar, vincular, linkar etc. Então a função bind, 
 * "amarra" o contexto a uma determinada função.
*/
// bind() - Passamos um objeto no qual queremos que seja resolvido o 'this'.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


const pessoa2 = {
    saudacao: 'Bom dia2!'
}

const falarDePessoa2 = pessoa.falar.bind(pessoa2)
falarDePessoa2()
