/*
    + Adição
    - Subtração
    / Divisão
    * Multiplicação
    ** Exponenciação
    % Módulo
    ++ Incremento
    -- Decremento
*/

let x = 0, y = 1

x = x + y
x += y

x = x - y
x -= y

x *= y
x /= y
x %= y
x **= y

x = x ** y

if (x == y){

}

/*
    == igualdade
    === valor igual e tipo igual
    != diferente
    !== diferente valor ou tipo
    < maior
    > menor
    >= maior ou igual
    <= menor ou igual
    ? ternário
*/

if (1 == '1'){
    console.log("valido")
}

if (1 === '1'){
    console.log("valido")
}
else{
    console.log("invalido")
}

1 === '1' ? console.log("é válido") : console.log("não é válido")

/*
    && E lógico
    || OU lógico
    ! negação
 */   