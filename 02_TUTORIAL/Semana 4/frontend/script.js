function addCode() {
    var experiencia = document.getElementById("campo-experiencia").value
    document.getElementById("bloco-adicionar").innerHTML += 
    "<p>" + experiencia + "</p>";
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