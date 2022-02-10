var a = 5, b = 7, x = 0;

for (let i = 0; i < 1000; i++) {
    if(i % a == 0 || i % b == 0){
        x += i;
    }    
}

console.log("A soma dos números múltiplos de 5 e 7 menores do que 1000 é " + x)