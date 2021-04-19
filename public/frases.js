$("#btn-change").click(fraseAleatoria);
$("#btn-frase").click(buscaFrase);

function buscaFrase() {
    $("#carregamento").toggle();
    var fraseId = $("#frase-id").val();
    console.log(fraseId);
    var dados = {id: fraseId};
    $.get("http://localhost:3000/frases", dados ,trocaFrase)
    .fail(function(){
        $("#erro").show();
        setTimeout(function() {
            $("#erro").toggle();
        },2000);
    })
    .always(function() {
        $("#carregamento").toggle();
    });
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atTamanhoFrase();
    atTempoInic();

}



function fraseAleatoria(){
    $("#carregamento").show();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").show();
        setTimeout(function() {
            $("#erro").toggle();
        },2000);
    })
    .always(function() {
        $("#carregamento").toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random()* data.length);

    frase.text(data[numeroAleatorio].texto);
    atTamanhoFrase();
    atTempoInic(data[numeroAleatorio].tempo);
}