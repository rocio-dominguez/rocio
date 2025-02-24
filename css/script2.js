function accionsi(){
    alert("¡Ahora ya somos novio!♥");
}
function mover(){
    const width = window.innerWidth;
    const height= window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random()* height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position="absolute";
    btnNo.style.left= newWidth + "px";
    btnNo.style.top= newHeight + "px";
}
function accionsipregunta(){
    alert("¡veamos ahora!♥");
}
function moverpregunta(){
    const width = window.innerWidth;
    const height= window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random()* height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position="absolute";
    btnNo.style.left= newWidth + "px";
    btnNo.style.top= newHeight + "px";
}