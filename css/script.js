
function accionsi(){
    const respuesta=confirm("¿Estas seguro de querer ser mi mi amigo pase lo que pase,despues; No hay marcha atras?");
    if(respuesta){
        window.location.href="opcionsi.html";
    } else {
        alert("😱😱 😰😰 😥😥 Espero que puedas reconsiderarlo My life ");
    }
}

function mover(){
    const width =window.innerWidth;
    const height=window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random()* height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position="absolute";
    btnNo.style.left= newWidth + "px";
    btnNo.style.top= newHeight + "px";

}

function accionsipregunta(){
    const respuesta=confirm("¿Estas segura que quieres responder esta pregunta?");
    if(respuesta){
        window.location.href="quieres.html";
    } else {
        alert("Vale estoy aqui en cualquier momento");
    }
}

function moverpregunta(){
    const width =window.innerWidth;
    const height=window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random()* height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position="absolute";
    btnNo.style.left= newWidth + "px";
    btnNo.style.top= newHeight + "px";

}
