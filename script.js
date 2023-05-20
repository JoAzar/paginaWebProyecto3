var desplegarMenu = document.getElementById("desplegar");
var estaDesplegado = false;

desplegarMenu.addEventListener("click",() => {
    if(estaDesplegado){
       document.getElementById("desplegable").style.top="5em";
        document.getElementById("desplegable").style.opacity="1";
        desplegarMenu.setAttribute("icon", "mdi:apple-keyboard-shift");  
    }else{
        desplegarMenu.setAttribute("icon", "mdi:arrow-down-bold-outline");
        document.getElementById("desplegable").style.opacity="0";
        document.getElementById("desplegable").style.top="0.5em";
    }
    estaDesplegado = !estaDesplegado;
});

