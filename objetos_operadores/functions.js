function saudacao(param) {
    return `Olá ${param}`
}
console.log(saudacao('mundo'));

(function (param){
    console.log(param)    
})('automatica')

var ola = function ola(param) {
    return `Olá ${param}`
}
console.log(ola('mundo de forma alternativa'))

const dobro = (valor) => {
    return valor * 2
}
console.log(dobro(4))

const triplo = valor => valor * 3
console.log(triplo(3))

let hello = () => console.log('hello')
hello()

let goodbye = _ => console.log('goodbye')
goodbye()

const adiciona = (a, b, c) => a + b + c
console.log(adiciona(2,4,8))

const multiplica = (a = 2, b = 3, c = 1) => a * b * c
console.log(multiplica())
console.log(multiplica(2,2,3))