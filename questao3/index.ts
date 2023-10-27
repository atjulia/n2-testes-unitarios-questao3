// Você deve implementar uma função chamada digital_root(n) que calcula a raiz digital de um número não negativo. 
// A raiz digital é a soma recursiva de todos os dígitos de um número até que reste apenas um dígito.A função 
// deve receber um número inteiro não negativo n como entrada e retornar o dígito único resultante após a aplicação 
// do processo de soma recursiva.

function digital_root(n: number): number {
  // função para calcular a soma dos dígitos de um número
  function sumDigits(num: number): number {
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
