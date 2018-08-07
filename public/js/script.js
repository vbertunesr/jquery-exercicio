var campoDigitacao = $ (".campo-digitacao");

$(function(){
  tamanhoFrase();
  contadores();
  validaFrase();

});

function tamanhoFrase(){
var frase = $(".frase").text(); 
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase").text(numPalavras);
}

function contadores(){
campoDigitacao.on("input",function(){
  var conteudo = campoDigitacao.val();
  var qtdPalavras = conteudo.split(" ").length;
  var qtdChar = conteudo.length;
  $("#contador-palavras").text(qtdPalavras);
  $("#contador-caracteres").text(qtdChar);

});
}

function validaFrase(){
campoDigitacao.on("input", function(){
  var frase = $(".frase").text();
  var conteudo = campoDigitacao.val();
  var comparaFrases = frase.substr(0, conteudo.length);
  if(frase.startsWith(conteudo)){
    campoDigitacao.addClass("texto-correto");
    campoDigitacao.removeClass("texto-errado");
 } else {
  campoDigitacao.addClass("texto-errado");
  campoDigitacao.removeClass("texto-correto");
  }
});
}
