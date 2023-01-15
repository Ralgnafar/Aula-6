var saida = document.getElementById("saida");
var imprimir = "";

var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
alert(meses.length);

for(var i = 0; i < meses.length; i++){
    imprimir += meses[i] + "<br>";
}

saida.innerHTML = imprimir;
