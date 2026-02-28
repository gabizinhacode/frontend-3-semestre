//Exercicio 1 - par ou impar

let num = prompt("digite um numero");
if(num % 2 == 0){
    console.log("O numero é par");
}else{
    console.log("O numero é impar");
}


//Exercicio 2 - maior entre 3 numeros 

let num1 = prompt("digite o primeiro numero");
let num2 = prompt("digite o segundo numero");
let num3 = prompt("digite o terceiro numero");

if(num1 > num2 && num1 > num3){
    console.log("o numero" + num1 + "é o maior");
}else if(num2 > num1 && num2 > num3){
    console,log("o numero" + num2 + "é o maior");
}else if(num3 > num1 && num3 > num2){
    console.log("o numero" + num3 + "é o maior");
}

//Exercicio 3 - converter temperatura
let tempc = prompt("digite a temperatura em Celsius");
let tempf = (tempc * 9/5) + 32;
console.log("a temperatura em Fahrenheit é" + tempf);

//Exercicio 5- multa

let velocidade = prompt("digite a velocidade do carro");
if(velocidade > 80){
    let multa = (velocidade - 80) * 5;
    console.log("você foi multado, o valor da multa é" + multa);
}else{
    console.log("você não foi multado");
}

//Exercicio 6- preco da passagem

let distancia = prompt("digite a distancia da viagem em km");
if(distancia <= 200){
    let preco = distancia * 0.50;
    console.log("o preço da passagem é" + preco);
    }else{
        let preco = distancia * 0.45;
        console.log("o preço da passagem é" + preco);
    }


//Exercicio 7- Votar

let nascimento = prompt("digite o ano do seu nascimento");
let idade = 2026 - nascimento;

if(idade < 16){
    console.log("você não pode votar");
}else{
    console.log("você pode votar");
}

//exercicio 8-ano bissexto 
let ano = prompt("digite um ano");
if (ano % 4 == 0){
    console.log("o ano é bissexto");
}else{
    console.log("o ano não é bissexto");

}

//Exercicio 9- alistamento militar
let nascimenrto = prompt("digite o ano de nascimento");
let idadeAlistamento = 2026 - nascimenrto;

if(idadeAlistamento < 18){
    console.log("você ainda não precisa se alistar");
}else if(idadeAlistamento == 18){
    console.log("é hora de se alistar, gracinha");
}else{
    console.log("você já deveria ter se alistado, ta esperando oque?");
}

//exercicio 10- saldo de conta
let conta = prompt("numero da conta");
let saldo = prompt("saldo da conta");
let debito = prompt("debito");
let credito = prompt("credito");
let saldoatual = saldo - debito + credito;

console.log("o saldo atual da conta é" + saldoatual);

if(saldoatual >= 0){
    console.log("saldo positivo");
}else{
    console.log("saldo negativo");
}

//exercicio 11- numeros de 1 a 10 (crescente)

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//exercicio 12- numeros de 10 a 1 (decrescente)
for (let i = 10; i >= 1; i--){
    console.log(i);
}

//exercicio 13- 10 primeiros numeros maiores que 100
for (let i = 101; i <= 110; i++){
    console.log(i);
}

//exercicio 14- media da turma 
let alunos = Number(prompt("quantos alunos tem na turma?"));
let soma = 0;

for (let i = 1; i <= alunos; i++){
    let nota = Number(prompt("digite a nota do aluno " + i));
    soma = soma + nota;
}

let media = soma / alunos;
console.log("a média da turma é" + media);

//exercicio 15- somar 10 numeros 
let soma15 = 0;
for (let i = 1; i <= 10; i++){
    let numero = Number(prompt("digite o numero " + i));
    soma15 = soma15 + numero;
}
console.log("a soma dos numeros é" + soma15);

//exercicio 16- somar apenas numeros menores que 40
let soma16 = 0;
for (let i = 1; i <= 10; i++){
    let numero = Number(prompt("digite o numero " + i));
    if(numero < 40){
        soma16 = soma16 + numero;
    }
}
console.log("a soma dos numeros menores que 40 é" + soma16);

//exercicio 17- soma entre dois valores
let valor1 = Number(prompt("digite o primeiro valor"));
let valor2 = Number(prompt("digite o segundo valor"));

let soma17 = 0;
for (let i = valor1; i <= valor2; i++){
    soma17 = soma17 + i;
}
console.log("a soma entre os valores é" + soma17);