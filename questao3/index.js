"use strict";
function digital_root(n) {
    // função para calcular a soma dos dígitos de um número
    function sumDigits(num) {
        return num.toString().split('').map(Number).reduce((acc, dig) => acc + dig, 0);
    }
    // soma recursiva até que reste apenas um dígito
    while (n >= 10) {
        n = sumDigits(n);
    }
    return n;
}
// testes unitários
console.log(digital_root(5) === 5);
console.log(digital_root(16) === 7);
console.log(digital_root(2014) === 7);
console.log(digital_root(942) === 6);
console.log(digital_root(132189) === 6);
console.log(digital_root(493193) === 2);
