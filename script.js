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
 
    precioNetflix.classList.add("cambiar");

setTimeout(function(){

    precioNetflix.classList.remove("cambiar");

},250);
    
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
    precioDisney.classList.add("cambiar");

setTimeout(function(){

    precioDisney.classList.remove("cambiar");

},250);
    
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

    precioPrime.classList.add("cambiar");

setTimeout(function(){

    precioPrime.classList.remove("cambiar");

},250);
    
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

    precioHBO.classList.add("cambiar");

setTimeout(function(){

    precioHBO.classList.remove("cambiar");

},250);
    
});

// ================================
// SPOTIFY
// ================================

const tipoSpotify = document.getElementById("tipo-spotify");

const precioSpotify = document.getElementById("precio-spotify");

tipoSpotify.addEventListener("change", function(){

    if(tipoSpotify.value=="1 mes"){

        precioSpotify.textContent="$9.900";

    }

    else if(tipoSpotify.value=="2 meses"){

        precioSpotify.textContent="$15.900";

    }

    precioSpotify.classList.add("cambiar");

    setTimeout(function(){

        precioSpotify.classList.remove("cambiar");

    },250);

});

// ================================
// BOTONES WHATSAPP
// ================================

// Netflix
document.getElementById("btn-netflix").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-netflix").value;

   const mensaje =
`¡Hola! 😊

Estoy interesado en adquirir el servicio de Netflix.

📺 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? Muchas gracias.`;
    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// Disney
document.getElementById("btn-disney").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-disney").value;

    const mensaje =
`¡Hola! 😊

Estoy interesado en adquirir Disney+.

📺 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? Muchas gracias.`;
    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// Prime
document.getElementById("btn-prime").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-prime").value;

    const mensaje =
`¡Hola! 😊

Estoy interesado en adquirir Prime Video.

📺 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? Muchas gracias.`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// HBO
document.getElementById("btn-hbo").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-hbo").value;

    const mensaje =
`¡Hola! 😊

Estoy interesado en adquirir HBO Max.

📺 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? Muchas gracias.`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );
});
    
// Spotify
document.getElementById("btn-spotify").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-spotify").value;

    const mensaje =
`🎵 ¡Hola Magic Screens! 👋

Quiero comprar Spotify Premium.

📦 Plan seleccionado:
${tipo}

¿Podrías ayudarme con el proceso de compra? 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});
});
