function addCode() {
    var experiencia = document.getElementById("campo-experiencia").value;
    document.getElementById("bloco-adicionar").innerHTML += 
    "<p>" + experiencia + "</p>";
}

function showContact() {
  var contato = document.getElementById("campo-contato").value;

  if (contato == "luiz.borges@sou.inteli.edu.br"){
    document.getElementById("contato-mostrar").innerHTML = "<a href = http://127.0.0.1:3051/contato>Clique para ver as informações de contato</a>" 
  }else{
    document.getElementById("contato-mostrar").innerHTML = "<p> Informação errada, tente novamente.</p>"
  }
}

$(document).ready(function(){
    $("a").hover(function(){
      $(this).css("color", "whitesmoke");
      }, function(){
      $(this).css("color", "#AB2330");
    });
});

$(document).ready(function(){
    $("#hide").click(function(){
      $("#texto-bloco-resumo").hide();
    });
    $("#show").click(function(){
      $("#texto-bloco-resumo").show();
    });
  });