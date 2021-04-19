var tempoInicial =  $("#tempo").text();
var campo = $(".campoDigitacao");

$(function(){
    atTamanhoFrase();
    startContadores();
    start ();
    $("#reiniciar").click(restart);
    indicador()
    atualizaPlacar()
    $('#usuarios').selectize({
        create: true,
        sortField: 'text'
    });
    $(".tooltip").tooltipster({
        trigger: "click"
    });
});

function atTempoInic(tempo){
    tempoInicial = tempo;
    $("#tempo").text(tempo);
}

function atTamanhoFrase(){
    var frase = $(".frase").text();
    var numPal = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho");
    tamanhoFrase.text(numPal);
}

function startContadores(){
    campo.on("input", function(){
        var conteudo = campo.val();
        
        var qtPalavras = conteudo.split(/\S+/).length -1;
        $("#contadorPalavras").text(qtPalavras);
        
        var qtCaracteres = conteudo.length;
        $("#contadorCaracteres").text(qtCaracteres);
    });
};


function start (){
    campo.one("focus", function(){
        var cron = $("#tempo").text();
        var cronometroID = setInterval(function(){
            cron--;
            $("#tempo").text(cron);
            if (cron < 1){
            clearInterval(cronometroID);
                fimJogo();
            }
        },1000);
    });
}

function fimJogo(){
    campo.attr("disabled", true);
    placar();
} 

function restart(){
    console.log("não clique no meu botão")
    campo.attr("disabled", false);
    campo.val("");
    $("#tempo").text(tempoInicial);
    $("#contadorPalavras").text("0");
    $("#contadorCaracteres").text("0");
    campo.removeClass("bg-danger");
    campo.removeClass("bg-success");
    start();
}

function indicador(){
    var frase = $(".frase").text();
    campo.on("input", function(){
        var frase =$(".frase").text();
        var digitado = campo.val();
        var comparado = frase.substr(0,digitado.length);
        
        if(digitado == comparado){
            campo.removeClass("bg-danger");
            campo.addClass("bg-success");
        }else{
            campo.removeClass("bg-success");
            campo.addClass("bg-danger");
        }
    });    
}

