$("#btn-placar").click(mostraPlacar);
$("#btn-sync").click(sincronizaPlacar);


function mostraPlacar(){
    $(".placar").stop().slideToggle(500);
}

function placar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#usuarios").val();
    var numLetras = $("#contadorCaracteres").text();

    var linha = novaLinha(usuario, numLetras);
    linha.find(".botao-remover").click(removeLinha);
    
    corpoTabela.append(linha);
    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("html, body").animate(
    {
        scrollTop: posicaoPlacar
    }, 1000);
}

function novaLinha(usuario, numLetras){
    var linha = $("<tr>");
    var coluna = $("<td>").text(usuario)
    var letras = $("<td>").text(numLetras)
    var remove = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href" ,"#").text("⚰")

    remove.append(link);
    linha.append(coluna);
    linha.append(letras);
    linha.append(remove);
    
    return linha;
}
function removeLinha(event){
        event.preventDefault();
        var linha = $(this).parent().parent()
        linha.fadeOut(500);
        setTimeout (function(){
            linha.remove();
        },500);
        
}

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");
    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavra = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario : usuario,
            pontos : palavra
        };

        placar.push(score)
    });
    var dados = {
        placar : placar
    };
    $.post("http://localhost:3000/placar", dados, function(){

    })
};

function atualizaPlacar(){
    $.get ("http://localhost:3000/placar", function(data){
    $(data).each(function(){
        var linha = novaLinha(this.usuario, this.pontos);
        linha.find(".botao-remover").click(removeLinha);
        $("tbody").append(linha);
    })
    })
}