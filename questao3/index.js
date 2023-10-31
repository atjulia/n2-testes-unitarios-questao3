// Você deve implementar uma função chamada digital_root(n) que calcula a raiz digital de um número não negativo. 
// A raiz digital é a soma recursiva de todos os dígitos de um número até que reste apenas um dígito.
// A função deve receber um número inteiro não negativo n como entrada e retornar o dígito único resultante após 
// a aplicação do processo de soma recursiva.

"use strict";

function digital_root(n) {
    // Soma recursiva até que reste apenas um dígito
    while (n >= 10) {
        n = sumDigits(n);
    }

    return n;
}

// Função para calcular a soma dos dígitos de um número
function sumDigits(num) {
    return num.toString().split('').map(Number).reduce((acc, dig) => acc + dig, 0);
}

// Testes unitários
function testDigitalRoot() {
    // Número de um dígito deve retornar o próprio número
    const result1 = digital_root(5);
    console.assert(result1 === 5, `Erro no Teste 1. Resultado: ${result1}`);
  
    // Soma dos dígitos de 16 é 7
    const result2 = digital_root(16);
    console.assert(result2 === 7, `Erro no Teste 2. Resultado: ${result2}`);
  
    // Soma dos dígitos de 942 é 6
    const result3 = digital_root(942);
    console.assert(result3 === 6, `Erro no Teste 3. Resultado: ${result3}`);
  
    // Soma dos dígitos de 12345 é 6
    const result4 = digital_root(12345);
    console.assert(result4 === 6, `Erro no Teste 4. Resultado: ${result4}`);
  
    // Número de um dígito zero deve retornar 0
    const result5 = digital_root(0);
    console.assert(result5 === 0, `Erro no Teste 5. Resultado: ${result5}`);
}
  
testDigitalRoot();