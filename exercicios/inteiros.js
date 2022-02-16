var inteiros = (a, b) => {

    var x = 0

    for (let i = 0; i < 1000; i++) {
        if(i % a == 0 || i % b == 0){
            x += i            
        }  
    }
    return x
}

module.exports = { inteiros }

