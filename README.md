# n2 - testes unitários

Questões desenvolvidas para a n2 da matéria de **ANÁLISE, PROJETO E DESENVOLVIMENTO ÁGIL**

 - Questão 3: Você deve implementar uma função chamada **digital_root(n)** que calcula a raiz digital de um número não negativo.  A raiz digital é a soma recursiva de todos os dígitos de um número até que reste apenas um dígito. A função deve receber um número inteiro não negativo n como entrada e retornar o dígito único resultante após a aplicação do processo de soma recursiva.
 - Questão 4: Você deve implementar uma função chamada encryptThis(message) que criptografa uma mensagem de texto seguindo as regras especificadas abaixo:
	- A mensagem é uma string contendo palavras separadas por espaços.
	- Cada palavra na mensagem deve ser criptografada da seguinte maneira:
		- O primeiro caractere da palavra deve ser convertido para o seu código ASCII.
		 - O segundo caractere da palavra deve ser trocado com o último caractere.
		- A função deve retornar a mensagem criptografada, mantendo a mesma estrutura de palavras separadas por espaços.

# Instruções para execução das questões

 1. Clonar o repositório
 2. `cd questao3`
 3. `node index.js`
 4. `cd ../questao4`
 5. `node index.js` 
Obs: Independente da questão, caso deseje realizar alguma alteração no código, deve ser feito no arquivo **`index.ts`**, após salvar o arquivo é necessário executar o comando **`tsc`** no terminal