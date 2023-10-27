// Você deve implementar uma função chamada encryptThis(message) que criptografa uma mensagem de texto seguindo as regras especificadas abaixo:
// - A mensagem é uma string contendo palavras separadas por espaços.
// - Cada palavra na mensagem deve ser criptografada da seguinte maneira:
//   - O primeiro caractere da palavra deve ser convertido para o seu código ASCII.
//   - O segundo caractere da palavra deve ser trocado com o último caractere.
//   - A função deve retornar a mensagem criptografada, mantendo a mesma estrutura de palavras separadas por espaços.

function encryptThis(message: string): string {
  // divide a mensagem por espaços
  const words = message.split(' ');

  // função auxiliar para criptografar uma única palavra
  const encryptWord = (word: string): string => {
    if (word.length === 0) return '';
    const firstChar = word.charCodeAt(0).toString();
    const encryptedWord = [
      firstChar,
      word[word.length - 1],
      word.slice(2, -1),
      word[1],
    ].join('');

    return encryptedWord;
  };

  // mapeia cada palavra, criptografa e junta as palavras novamente com os espaços
  const encryptedMessage = words.map(encryptWord).join(' ');

  return encryptedMessage;
}

// testes unitários
const test1 = encryptThis("Hello");
console.log(test1); // '72olle'
console.log(test1 === '72olle');
console.log('-----------------');

const test2 = encryptThis("good");
console.log(test2); // '103doo'
console.log(test2 === '103doo');
console.log('-----------------');

const test3 = encryptThis("hello world");
console.log(test3); // '104olle 119drlo'
console.log(test3 === '104olle 119drlo');
console.log('-----------------');

const test4 = encryptThis("");
console.log(test4); // ''
console.log(test4 === '');
console.log('-----------------');

const test5 = encryptThis("a");
console.log(test5); // '97a'
console.log(test5 === '97a');
console.log('-----------------');