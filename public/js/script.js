var tempoInicial = $("#tempo-digitacao").text();
var campoFrase = $(".campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras  = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campoFrase.on("input",function() {
        var conteudo = campoFrase.val();

        var qtdPalavras = conteudo.split(" ").length;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    campoFrase.one("focus", function() {
        var tempoRestante = $("#tempo-digitacao").text();
        $("#botao-reiniciar").attr("disabled",true);
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campoFrase.attr("disabled", true);
                clearInterval(cronometroID);
                campoFrase.toggleClass("campo-desativado");
            }
        }, 1000);
    });
}

function inicializaMarcadores() {
    campoFrase.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campoFrase.val();
        var comparavel = frase.substr(0 , digitado.length);

        if( frase.startsWith(digitado)) {
            campoFrase.addClass("borda-verde");
            campoFrase.removeClass("borda-vermelha");
        } else {
            campoFrase.addClass("borda-vermelha");
            campoFrase.removeClass("borda-verde");
        }
    });
}

function reiniciaJogo(){
    campoFrase.attr("disabled",false);
    campoFrase.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campoFrase.toggleClass("campo-desativado");
    campoFrase.removeClass("borda-vermelha");
    campoFrase.removeClass("borda-verde");
}


