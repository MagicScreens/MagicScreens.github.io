// ================================
// MAGIC SCREENS
// JavaScript Principal
// ================================

console.log("Magic Screens cargado correctamente");
// ================================
// NETFLIX
// ================================

const tipoNetflix = document.getElementById("tipo-netflix");

const precioNetflix = document.getElementById("precio-netflix");
tipoNetflix.addEventListener("change", function(){
if(tipoNetflix.value=="Pantalla"){

    precioNetflix.textContent="$13.000";

}

else if(tipoNetflix.value=="Cuenta"){

    precioNetflix.textContent="$49.900";

}

else if(tipoNetflix.value=="Internacional"){

    precioNetflix.textContent="$15.000";

}
});
