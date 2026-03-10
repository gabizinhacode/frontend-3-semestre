// let lista1 = ["joao", "kaique", "thomas", "gabi", "rayane", "julias"]
// let lista2 = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100]

//for (let indice in lista1) {
    //console.log(indice);
    //console.log(lista1[indice]);
//}

//for (let item of lista1) {
    //console.log(item);
//}

//let frase ="|meus alunos:";
//lista1.forEach((item) => {
    //frase += ` ${item} |`;
//})
//console.log(frase);

//lista1[6]="dienifer"
//console.log(lista1);

//lista1.push("dienifer")
//lista1.unshift("nicolas")
//console.log(lista1);

//let alista1 = lista1.pop()
//console.log(alista1);
//console.log(lista1);
//a = lista1.shift()
//console.log(a);
//console.log(lista1);

// console.log(lista1);
// //let a = lista1.slice(3,4); // 3 onde começa a array, 4 quantos itens serão retirados
// let a = lista1.splice(3,1); // o indice onde começa e onde termina
// console.log(a);

// let lista3 = lista1;

// lista3 = lista1.slice(); //copia a lista1 para a lista3, sem alterar a lista1

// let b = lista2.map(function(n){
//     return n*2;
// })
// console.log(b);

// let b =lista2.map(n) => {
//   return n * 2;
// }
// console.log(b);


// let c = lista2.filter(function(n){
//     return n % 2 == 0;
// })
// console.log(c);


// let [a1, a2, a3, a4, a5, a6] = lista1;
// console.log(a1, a2, a3, a4, a5, a6);

// let 1 = lista1 + lista2;
// console.log(1);
// 1 = [...lista1, ...lista2];
// console.log(1);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//exerccicio 1 -Desenvolva um programa que a partir de um vetor de inteiros com 5 valores inicializados na declaração apresente o dobro de cada valor armazenado.

let vetor = [1,2,3,4,5];
let dobro = vetor.map (function(n){
    return n*2;
})
console.log(dobro);

//exercicio 2 - Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração apresente a média aritméticas desses valores.

let vetor2 = [1,2,3,4,5,6,7,8];
let media = vetor2.reduce(function(acumulador, valorAtual){
    return acumulador + valorAtual;
}, 0) / vetor2.length;
console.log(media);

//exercicio 3- Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.

let idades = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115];
let mediaIdades = idades.reduce(function(acumulador, valorAtual){
    return acumulador + valorAtual;
}, 0) / idades.length;
let idadesAcimaMedia = idades.filter(function(idade){
    return idade > mediaIdades;
});
console.log(idadesAcimaMedia);

//exercicio 4 - Desenvolva um programa que leia 10 números e apresente os valores pares. Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”

let numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = numeros.filter(function(n){
    return n % 2 == 0;
});
if (numerosPares.length > 0) {
    console.log(numerosPares);
} else {
    console.log("Todos os números são ímpares.");
}

//exercicio 5 - Desenvolva um programa que leia 8 números garantindo que os valores informados estejam entre 100 e 200 (caso não esteja apresente uma mensagem de “valor inválido”). Depois de preenchido apresente os valores armazenados.

let numeros2 = [150, 160, 170, 180, 190, 200, 210, 220];
let numerosValidos = numeros2.filter(function(n){
    if (n >= 100 && n <= 200) {
        return true;
    } else {
        console.log("Valor inválido: " + n);
        return false;
    }
});
console.log(numerosValidos);