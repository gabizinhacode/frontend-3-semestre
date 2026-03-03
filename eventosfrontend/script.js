// const btn = document.querySelector('button');
// function random(number) { // numero aleatorio dentro de um limite
//     return Math.floor(Math.random() * (number + 1));
// }

// function btChange(e) {// muda a cor de fundo
//     let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'; //rgb(255,255,255)
//     document.body.style.backgroundColor = color;
//     e.target.style.backgroundColor = color;
//     console.log(e);
// }


// btn.addEventListener('click', btChange);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercicio: 1- Contador, um botão que some(+1) toda vez que for clicado//
const incrementBtn = document.querySelector('#incrementBtn');
const counterValue = document.querySelector('#counterValue');
let count =1;
function incrementCounter() {
    count++;
    counterValue.textContent = count;
}
incrementBtn.addEventListener('click', incrementCounter);






//2-Mini card, uma imagem, nome, texto. botao para mudar a cor de fundo do card//

const card = document.querySelector('#card');

function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;
    card.style.backgroundColor = color;
}
card.addEventListener('click', changeColor);





//3- Mostrar texto enquanto digita, cria barra de texto conforme o usuario for digitando o texto aparece embaixo em um hx//

const inputText = document.querySelector('#inputText');
const outputText = document.querySelector('#outputText');
function showText() {
    outputText.textContent = inputText.value;
}
inputText.addEventListener('input', showText);


