var mdc = (a, b) => {

    var temp = 0;
    
    while (b != 0){
        temp = a % b;
        a = b;
        b = temp;
        
        return a;
}}

module.exports = { mdc } 