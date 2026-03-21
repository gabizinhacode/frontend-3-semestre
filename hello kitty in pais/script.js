const textoOriginal = document.getElementById('texto-exibicao').innerText;

function processarTexto() {
    const tamanho = parseInt(document.getElementById('inputTamanho').value);
    const painelResultado = document.getElementById('resultado-lista');
    const areaTexto = document.getElementById('texto-exibicao');

    if (isNaN(tamanho) || tamanho <= 0) {
        alert("Por favor, escolha um número válido!");
        return;
    }

    // 1. usando Regex para pegar apenas as palavras puras (sem pontos/vírgulas)
    const regexPalavras = /[a-zA-Zà-úÀ-Ú]+/g;
    const todasAsPalavras = textoOriginal.match(regexPalavras);

    // 2. filtrar palavras pelo tamanho e contar frequência
    const contagem = {};
    const palavrasEncontradas = [];

    todasAsPalavras.forEach(p => {
        if (p.length === tamanho) {
            const palavraMinuscula = p.toLowerCase();
            contagem[palavraMinuscula] = (contagem[palavraMinuscula] || 0) + 1;
            if (!palavrasEncontradas.includes(p)) {
                palavrasEncontradas.push(p);
            }
        }
    });

    // 3. destacar no texto usando Regex Dinâmico
    let textoComDestaque = textoOriginal;
    palavrasEncontradas.forEach(palavra => {
        const regexDestaque = new RegExp(`\\b${palavra}\\b`, 'gi');
        textoComDestaque = textoComDestaque.replace(regexDestaque, (match) => {
            return `<mark class="highlight">${match}</mark>`;
        });
    });

    areaTexto.innerHTML = textoComDestaque;

    // 4. exibir o resumo da contagem
    exibirResumo(contagem, tamanho);
}

function exibirResumo(contagem, tamanho) {
    const lista = document.getElementById('resultado-lista');
    const chaves = Object.keys(contagem);

    if (chaves.length === 0) {
        lista.innerHTML = `<strong>Nenhuma palavra com ${tamanho} letras encontrada.</strong>`;
        return;
    }

    let htmlResumo = `<strong>Palavras com ${tamanho} letras encontradas:</strong><ul>`;
    for (let p in contagem) {
        htmlResumo += `<li>"${p}": aparece ${contagem[p]}x</li>`;
    }
    htmlResumo += `</ul>`;
    lista.innerHTML = htmlResumo;
}