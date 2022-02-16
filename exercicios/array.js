// var numeros = [11, 23, 3, 14, 5, 66, 37, 48, 19, 1]

// var menor = Math.min.apply(null, numeros)
// var indMenor = numeros.indexOf(menor)
// var maior = Math.max.apply(null, numeros)
// var indMaior = numeros.indexOf(maior)

// console.log("O valor menor é " + menor)
// console.log("O indice do menor é " + indMenor)
// console.log("O valor maior é " + maior)
// console.log("O indice do maior é " + indMaior)

var indMenor = (Array) => {
    var menor = Math.min.apply(null, Array)
    return Array.indexOf(menor)

}

var indMaior = (Array) => {
    var maior = Math.max.apply(null, Array)
    return Array.indexOf(maior)
}


module.exports = { indMenor, indMaior }