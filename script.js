var desplegarMenu = document.getElementById("desplegar");
var estaDesplegado = false;
var mouseSobrePlatos = document.querySelector(".plato");


desplegarMenu.addEventListener("click",() => {
    if(estaDesplegado){
       document.getElementById("desplegable").style.top="200%";
        document.getElementById("desplegable").style.opacity="1";
        desplegarMenu.setAttribute("icon", "mdi:apple-keyboard-shift");  
    }else{
        desplegarMenu.setAttribute("icon", "mdi:arrow-down-bold-outline");
        document.getElementById("desplegable").style.opacity="0";
        document.getElementById("desplegable").style.top="0.5em";
    }
    estaDesplegado = !estaDesplegado;
});

mouseSobrePlatos.addEventListener("mouseover",() => {
    document.querySelector(".platos").style.left="-20vw";
    document.querySelector(".postres").style.left="6em";
    document.querySelector(".copas").style.left="6em";
});

mouseSobrePlatos.addEventListener("mouseout",() => {
    document.querySelector(".platos").style.left="0vw";
    document.querySelector(".postres").style.left="0em";
    document.querySelector(".copas").style.left="0em";
});