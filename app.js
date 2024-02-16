var textarea = document.getElementById("entrada");

function f2(textarea)
{
    string = textarea.value;
    string = string.toLowerCase();

    textarea.value = string;
}
function ValidaCampos() {
    var regex = /[#$%^&*()_+\-=\[\]{};':"\\|<>\/]/;

    var input = textarea.value;

    if (regex.test(input)) {
        alert("Campo contém caracteres especiais!");
        return false;
    }
    if (textarea.value.trim() === ""){
        alert('Campo não pode ficar vazio!')
        return false;
    }
    return true;
}
function criptografarTexto() {
    if (!ValidaCampos()) return false;
    limparBotao();
    dadosInseridos = textarea.value;

    var trocaA = /a/gi;
    var trocaE = /e/gi;
    var trocaI = /i/gi;
    var trocaO = /o/gi;
    var trocaU = /u/gi;

    var monta = dadosInseridos
    .replace(trocaE, "enter")
    .replace(trocaI, "imes")
    .replace(trocaA, "ai")
    .replace(trocaO, "ober")
    .replace(trocaU, "ufat");


    var quadro = document.getElementById("quadro");
    quadro.classList.add("novo-estilo");
    quadro.textContent = monta;
    criaBotao();
}
function descriptografarTexto() {
    limparBotao();
    dadosInseridos = textarea.value;

    var trocaA = /ai/gi;
    var trocaE = /enter/gi;
    var trocaI = /imes/gi;
    var trocaO = /ober/gi;
    var trocaU = /ufat/gi;

    var monta = dadosInseridos
    .replace(trocaE, "e")
    .replace(trocaI, "i")
    .replace(trocaA, "a")
    .replace(trocaO, "o")
    .replace(trocaU, "u");


    var quadro = document.getElementById("quadro");
    quadro.classList.add("novo-estilo");
    quadro.textContent = monta;
    criaBotao();
}
function criaBotao(){
    var button = document.createElement("button");
    button.innerHTML = "Copiar";
    button.id = 'botao';
    button.classList.add("botao-copiar");
    var body = document.getElementById("secao-branca");
    body.appendChild(button);

    button.addEventListener ("click", function() {
            copiarTexto();
      });
}
function copiarTexto() {
    var quadro = document.getElementById("quadro");

    var range = document.createRange();
    range.selectNode(quadro);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand("copy");
        alert("Texto copiado para a área de transferência!");
    } catch (err) {
        console.error("Erro ao copiar texto para a área de transferência: ", err);
    }

    window.getSelection().removeAllRanges();
}
function limparBotao() {
    var button = document.getElementById("botao");

    if (button) {
        button.remove();
        button = null;  
    }
}