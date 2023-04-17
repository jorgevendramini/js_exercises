/* 

1. Crie um programa que imprima na tela a tabuada de multiplicação 
de um número digitado pelo usuário, utilizando um loop while.

2. Faça um programa que leia o nome e a idade de 5 pessoas e imprima na
tela o nome da pessoa mais velha.

3. Escreva um programa que peça ao usuário para digitar um número e 
imprima na tela se ele é par ou ímpar, utilizando um loop do while

4. Faça um programa que gere 10 números aleatórios entre 1 e 100 e 
imprima na tela a média desses números, utilizando um loop for.

5. Crie um programa que leia uma palavra digitada pelo usuário e verifique
se ela é um palíndromo (ou seja, se é escrita da mesma forma tanto da 
esquerda para a direita quando da direita para a esquerda), utilizando um loop do while.

*/

// Exercício 1
/*
let number = prompt("Digite um número para ver a tabuada dele: ");

let tabuada;

for(let i = 0; i <= 10; i++){
    tabuada = number * i;
    console.log(tabuada);
    document.write(number + " x " + i + " = " + tabuada + "<br>");
}
*/

// Exercício 2

let people = [];

for (let i = 0; i < 5; i++) {

  let name = prompt("Digite o nome da pessoa" + (i + 1) + ":");
  let age = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));

  people.push([name, age]);
}

let older = people[1];

for (let i = 1; i < 5; i++) {
  if(people[i][1] > older[1]){
  	older = people[i];
  }
}

console.log(people);
console.log(older);
alert("A pessoa mais velha dentre as cinco é:" + older);


    
//Exercício 3
    
let number;

do{
	number = parseInt(prompt("Digite um número:"));
}while(isNaN(number));

number % 2 === 0 ? alert("o número é par!") : alert("o número é ímpar!");

	

//Exercício 4
	
let tenRandNum = [];
let media = 0;

for (let i = 0; i < 10; i++) {
  let random = Math.floor((Math.random() * 100) + 1);
  tenRandNum.push(random);
}

for(let i = 0; i < 10; i++){
	media += tenRandNum[i];
  if (i === 9){
  	media = media/(i+1);
  }
}

console.log(tenRandNum);
console.log(media);
alert("Os 10 numeros escolhidos foram: " + tenRandNum.join(" - "));
alert("A media desses numeros e: " + media);

	
//Exercício 5

let word = prompt("Digite uma palavra para verificar se ela e um palindromo:");
let wordSplit = word.split("");
let reverse = [];
let temp;

do{
	temp = wordSplit.pop();
  	reverse.push(temp);
}while(wordSplit.length > 0)

word === reverse.join("") ? alert("A palavra e Palindromo!") : alert("A palavra nao e um palindromo!");
	
	
	

// JOGO DA FORCA

//Declaração de variáveis

let palavraSecretaArray = prompt("Digite a palavra secreta:").toUpperCase().split("");
let tamanhoPalavra = palavraSecretaArray.length;
let letrasJaChutadas = [];
let letrasErradas = [];
let letrasCorretas = [];
let underlineSecretWord = [];
let numberOfTries = 0;

//Cria a palavra secreta utilizando _
for (let i = 0; i < tamanhoPalavra; i++) {
  underlineSecretWord.push(" _ ");
}


//Código principal que só termina com o jogador ganhando ou perdendo
//Ganha quando a palavra secreta for igual a palavra adivinha
//Perde se ultrapassar o número de tentativas
while (underlineSecretWord.join("") !== palavraSecretaArray.join("") && numberOfTries < 6) {

//Texto principal
  let input = prompt(`Palavra Secreta: ${underlineSecretWord} \n Letras já chutadas: ${letrasJaChutadas} \n Letras Erradas: ${letrasErradas} \n Letras corretas: ${letrasCorretas} \n Número de tentativas: ${numberOfTries} \n Digite uma letra para adivinhar a palavra: `).toUpperCase();

  if (input.length !== 1) {   //Verifica se digitou mais de uma letra
    alert("Por favor, digite apenas uma letra!")
  } else if (letrasJaChutadas.indexOf(input.charAt(0)) !== -1) { //Verifica se digitou uma letra igual 
    alert("Essa letra já foi chutada, tente outra!")
  } else { //senão executa a verificação da letra
    let found = false;  //variável para checagem se a letra é correta ou não
    for (let i = 0; i < palavraSecretaArray.length; i++) {  //loop para verificar cada letra da palavra secreta
      if (palavraSecretaArray[i] === input) {  // se a letra é igual a uma das letras da palavra secreta:
        if (!letrasJaChutadas.includes(input)) {  
          letrasJaChutadas.push(input);
        }  // verifica se a letra já foi inserida antes mais por conta de um bug no loop que repete a palavra varias vezes
        if (!letrasCorretas.includes(input)) {
          letrasCorretas.push(input);
        }
        underlineSecretWord[i] = input; //se a letra bate, insere a letra inves do underline
        found = true; //apenas para não entrar no if de letras erradas, dizendo que a letra está correta
      }
    }
    if (!found) { //se a lerta está errada, insere ela nos arrays de já chutadas e erradas e aumenta o contador de tentativas
      if (!letrasJaChutadas.includes(input)) {
        letrasJaChutadas.push(input);
      }
      if (!letrasErradas.includes(input)) {
        letrasErradas.push(input);
      }
      numberOfTries++;
    }
  }
}

if(underlineSecretWord.join("") === palavraSecretaArray.join("")){
	alert(`Parabéns, você descobriu a palavra secreta: ${palavraSecretaArray.join("")}`); //se palavra correta
} else {
	alert("Você perdeu. Ultrapassou o limite de tentativas, boa sorte na próxima!"); //se ultrapassar tentativas
}


console.log(underlineSecretWord);
