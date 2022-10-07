$("#formulario").click(function(event) {
    $("#contenedor").load('contenido/formulario.html');
 });


 $("#iniciar").click(function(event) {
    $("#contenedor").load('contenido/Login.html');
 });

 $("#tabla").click(function(event) {
   $("#contenedor").load('contenido/tabla.html');
});

document.querySelector('#partidos').addEventListener('click',traerDatos);

function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','partidos.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if (this.readyState ==  4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            for(let partido of datos.partidos){
            // console.log(items);
            $("#contenido").append("<tr>"+
            "<td>"+partido["fecha"]+"</td><td>"+partido["equipo1"]+"</td><td>"
            +partido.equipo2+"</td>"+"</tr>");
            }

        }
    }

}
