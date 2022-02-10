var a = 20, b = 6, temp;

while (b != 0){
    temp = a % b;
    a = b;
    b = temp;    
}

console.log("O MDC dos números é igual a " + a);