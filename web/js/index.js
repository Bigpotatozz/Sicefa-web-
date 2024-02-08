

let navbar = document.querySelector("#navbar");
let opciones = document.querySelector("#opcionesNav");

let contador = 0;


let nav = () => {
    
    console.log(contador)

   
    if (contador == 0) {
        opciones.style.left = "0px";

        return contador++;
    }


    else if (contador == 1) {
        opciones.style.left = "-400px";
        return contador = 0;
    }
}


