let frutas = ['Maçã', 'Banana', 'Manga']
console.log(frutas.length)

let primeiraFruta = frutas[0]
console.log(primeiraFruta)

let ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

frutas.forEach(function(fruta){
    console.log(fruta)
})

frutas.push('Goiaba', 'Abacate')

frutas.forEach((fruta) => {
    console.log(fruta)
})

frutas.pop()

frutas.forEach((fruta) => {
    console.log(fruta)
})

var jsonJS = [
    {
        "nome": function(){
            return 'Thiago'
        },
        "idade": "35"
    },
    {
        "nome": "Alexandre",
        "idade": 40
    }
]

console.log(jsonJS)
console.log(jsonJS[0].nome())

const jsonRest = {
    "nome": "Fábio",
    "idade": 42
}

console.log(jsonRest)

console.log(JSON.stringify(jsonJS))

const texto = '[{"idade":"35"},{"nome":"Alexandre","idade":40}]'

console.log(JSON.parse(texto))