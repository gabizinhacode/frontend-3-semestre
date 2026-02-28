var a = 1;
var b = 2;
const c = 3;
console.log(a + 1);
console.log(b + 1);
console.log(c + 1);

//alert("Gabi is linda");           // mostra um alerta na tela
//prompt("Qual é o seu nome?");       // mostra um prompt para o usuário digitar algo
//const nome = prompt("Qual é o seu nome?");     // armazena o valor digitado em uma variável
// console.log(nome);                    // mostra o valor da variável no console
//console.log(confirm("Voce é cagatronco? " + a));    // mostra uma caixa de confirmação para o usuário


//exercicios//
//1-Criar um script que pergunte o nome do usuário e exiba uma mensagem de boas-vindas personalizada.
const nome = prompt("Qual é o seu nome?");  // armazena o valor digitado em uma variável
alert("Bem-vindo, " + nome + "!");  // exibe uma mensagem de boas-vindas personalizada usando o valor da variável
console.log("Bem-vindo, " + nome + "!");  // também exibe a mensagem no console

//2- Criar um script que pergunte a disciplina favorita do usuario e exiba uma mensagem dizendo "a materia {} realmente é otima!".
const disciplina = prompt("Qual é a sua disciplina favorita?");  // armazena o valor digitado em uma variável
alert("A matéria " + disciplina + " realmente é otima!");  // exibe uma mensagem personalizada usando o valor da variável
console.log("A matéria " + disciplina + " realmente é otima!");  // também exibe a mensagem no console

//3- pedir ao usuario para informar a data de hoje
const data = prompt("Qual é a data de hoje?");  // armazena o valor digitado em uma variável
alert("A data de hoje é " + data);  // exibe a data informada pelo usuário
console.log("A data de hoje é " + data);  // também exibe a data no console

//4- perguntar ao usuario se ele esta preparado para o terceiro semestre de front-end
const preparado = confirm("Você está preparado para o terceiro semestre de front-end?");  // armazena a resposta do usuário (true ou false) em uma variável
if (preparado) {  // verifica se a resposta é verdadeira
    alert("Ótimo! Você está pronto para o desafio!");  // exibe uma mensagem positiva
    console.log("Ótimo! Você está pronto para o desafio!");  // também exibe a mensagem no console
}



//Exercicios

//5- pedir o usuario para inserir dois numeros, cacular e exibir o resultado de quatro operações aritmeticas basicas (soma, subtração, multiplicação e divisão) entre esses dois numeros
const num1 = parseFloat(prompt("Insira o primeiro número:"));  // armazena o primeiro número digitado pelo usuário
const num2 = parseFloat(prompt("Insira o segundo número:"));  // armazena o segundo número digitado pelo usuário
const soma = num1 + num2;  // calcula a soma
const subtracao = num1 - num2; // calcula a subtração
const multiplicacao = num1 * num2;  // calcula a multiplicação
const divisao = num1 / num2;  // calcula a divisão
alert("Resultados:\nSoma: " + soma + "\nSubtração: " + subtracao + "\nMultiplicação: " + multiplicacao + "\nDivisão: " + divisao);  // exibe os resultados
console.log("Resultados:\nSoma: " + soma + "\nSubtração: " + subtracao + "\nMultiplicação: " + multiplicacao + "\nDivisão: " + divisao);  // também exibe os resultados no console

//6- criar um cronograma que solicite ao usuario as notas de tres provas, calcule e exiba a media aritmetica dessas notas 
const nota1 = Number(prompt("Digite a primeira nota:")); // armazena a primeira nota digitada pelo usuário
const nota2 = Number(prompt("Digite a segunda nota:")); // armazena a segunda nota digitada pelo usuário
const nota3 = Number(prompt("Digite a terceira nota:")); // armazena a terceira nota digitada pelo usuário

const media = (nota1 + nota2 + nota3) / 3; // calcula a média aritmética das três notas

alert("A média das notas é: " + media); // exibe a média para o usuário
console.log("A média das notas é: " + media);  // também exibe a média no console

//7- crie um programa que pergunte a largura e a altura de uma parede, sabendo que 1 litro de tinta pinta 2 metros quadrados, calcule e exiba quantos litros de tinta serão necessarios para pintar a parede
const largura = Number(prompt("Digite a largura da parede em metros:")); // armazena a largura da parede digitada pelo usuário
const altura = Number(prompt("Digite a altura da parede em metros:")); // armazena a altura da parede digitada pelo usuário

const area = largura * altura; // calcula a área da parede
const litro = area / 2; // calcula a quantidade de litros de tinta necessária (1 litro pinta 2 metros quadrados)

alert(`
    area da parede: ${area} metros quadrados 
    litros de tinta necessários: ${litro} litros
`); // exibe a área da parede e a quantidade de litros de tinta necessária para o usuário
console.log(`
    area da parede: ${area} metros quadrados 
    litros de tinta necessários: ${litro} litros
`); // também exibe a área da parede e a quantidade de litros de tinta necessária no console


let maior = 18 
if (maior >= 19)  console.log("maior de idade");
else 
    console.log("menor de idade");

let cor = prompt("cor favorita");
switch (cor) {
    case "rosa":
        console.log("voce é a my melody");
        break;
    
        case "azul":
            console.log("voce é a hello kitty");
            break;
            
    case "amarelo":
        console.log("voce é a pom pom purin");
        break;
    case "vermelho":
        console.log("voce é a kuromi");
        break;

    case "verde":
        console.log("voce é a cinnamoroll");
        break;
     case "roxo":
        console.log("voce é a little twin stars");
        break;
}