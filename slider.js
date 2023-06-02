const slider = document.querySelector("#slider");
var sliderSelection = document.querySelectorAll(".slider__selection");
var sliderSelectionLast = sliderSelection[sliderSelection.length-1];

const btnLeft = document.querySelector(".slider__btn-left");
const btnRight = document.querySelector(".slider__btn-right");

btnRight.addEventListener("click", proximaImagen);
btnLeft.addEventListener("click", imagenAnterior);

slider.insertAdjacentElement("afterbegin",sliderSelectionLast);


function proximaImagen() {
    var sliderSelectionFirst = document.querySelectorAll(".slider__selection")[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    

    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSelectionFirst);
        slider.style.marginLeft = "-100%";
    },500)
    
}

function imagenAnterior() {
    var sliderSelection = document.querySelectorAll(".slider__selection");
    var sliderSelectionLast = sliderSelection[sliderSelection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";

    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSelectionLast);
        slider.style.marginLeft = "-100%";
    },500)
    
}

//setInterval(proximaImagen, 1000); guardar para implementar en otro código;