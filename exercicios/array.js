var indMenor = (Array) => {
    var menor = Math.min.apply(null, Array)
    return Array.indexOf(menor)

}

var indMaior = (Array) => {
    var maior = Math.max.apply(null, Array)
    return Array.indexOf(maior)
}


module.exports = { indMenor, indMaior }