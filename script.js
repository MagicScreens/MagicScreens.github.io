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

tipoNetflix.addEventListener("change", function () {

    console.log(tipoNetflix.value);

    if (tipoNetflix.value === "Pantalla") {

        precioNetflix.textContent = "$13.000";

    }

    else if (tipoNetflix.value === "Cuenta Completa") {

        precioNetflix.textContent = "$49.900";

    }

    else if (tipoNetflix.value === "Internacional") {

        precioNetflix.textContent = "$15.000";

 }
    
});

// ================================
// DISNEY+
// ================================

const tipoDisney = document.getElementById("tipo-disney");

const precioDisney = document.getElementById("precio-disney");

tipoDisney.addEventListener("change", function(){
console.log(tipoDisney.value);
    if(tipoDisney.value=="Pantalla Estándar +"){

        precioDisney.textContent="$7.500";

    }

    else if(tipoDisney.value=="Cuenta Estándar +"){

        precioDisney.textContent="$13.900";

    }

    else if(tipoDisney.value=="Pantalla Premium +"){

        precioDisney.textContent="$10.000";

    }

    else if(tipoDisney.value=="Cuenta Premium +"){

        precioDisney.textContent="$37.900";

        }
});

    // ================================
// PRIME VIDEO
// ================================

const tipoPrime = document.getElementById("tipo-prime");

const precioPrime = document.getElementById("precio-prime");

tipoPrime.addEventListener("change", function(){

    if(tipoPrime.value=="Pantalla"){

        precioPrime.textContent="$6.500";

    }

    else if(tipoPrime.value=="Cuenta Completa"){

        precioPrime.textContent="$13.900";

    }

});

// ================================
// HBO MAX
// ================================

const tipoHBO = document.getElementById("tipo-hbo");

const precioHBO = document.getElementById("precio-hbo");

tipoHBO.addEventListener("change", function(){

    if(tipoHBO.value=="Pantalla"){

        precioHBO.textContent="$7.500";

    }

    else if(tipoHBO.value=="Cuenta Completa"){

        precioHBO.textContent="$13.900";

    }

});
