var textInput = document.querySelector("#input-texto");
var outputInput = document.querySelector("#output");

function verificarEntrada(texto) {
    var regex = /[À-ÖØ-öø-ÿ]/;

    if (texto.match(regex)) {
        alert("Por favor, use apenas letras minúsculas e sem acentos!");
        return false;
    }

    return true;
}

function criptografar() {
    var texto = textInput.value;

    if (!verificarEntrada(texto)) {
        return;
    }

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    outputInput.innerHTML = '<textarea readonly id="input-texto">' + resultCripto + '</textarea>';
}

function descriptografar() {
    var texto = textInput.value;

    if (!verificarEntrada(texto)) {
        return;
    }

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    outputInput.innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + '</textarea>';
}

function copiar() {
    var textoCop = outputInput.querySelector('textarea');
    textoCop.select();
    document.execCommand('copy');
    alert("Mensagem secreta copiada!");
}

function limpar() {
    textInput.value = '';
    outputInput.innerHTML = `
        <img src="./assets/illustration.jpg" alt="Imagem cartoon 3D de uma mulher olhando uma folha de papel com uma lupa">
        <h2>A sua mensagem secreta aparecerá aqui!</h2>`;
}
