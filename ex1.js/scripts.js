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
if