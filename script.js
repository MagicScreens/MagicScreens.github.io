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
// APPLE TV+
// ================================

const tipoApple = document.getElementById("tipo-apple");

const precioApple = document.getElementById("precio-apple");

tipoApple.addEventListener("change", function(){

    if(tipoApple.value=="Pantalla"){

        precioApple.textContent="$7.500";

    }

    precioApple.classList.add("cambiar");

    setTimeout(function(){

        precioApple.classList.remove("cambiar");

    },250);

});

// ================================
// PARAMOUNT+
// ================================

const tipoParamount = document.getElementById("tipo-paramount");

const precioParamount = document.getElementById("precio-paramount");

tipoParamount.addEventListener("change", function(){

    if(tipoParamount.value=="Pantalla"){

        precioParamount.textContent="$9.900";

    }

    else if(tipoParamount.value=="Cuenta Completa"){

        precioParamount.textContent="$18.900";

    }

    precioParamount.classList.add("cambiar");

    setTimeout(function(){

        precioParamount.classList.remove("cambiar");

    },250);

});

// ================================
// CRUNCHYROLL
// ================================

const tipoCrunchy = document.getElementById("tipo-crunchy");

const precioCrunchy = document.getElementById("precio-crunchy");

tipoCrunchy.addEventListener("change", function(){

    if(tipoCrunchy.value=="Pantalla"){

        precioCrunchy.textContent="$6.900";

    }

    else if(tipoCrunchy.value=="Cuenta Completa"){

        precioCrunchy.textContent="$11.900";

    }

    precioCrunchy.classList.add("cambiar");

    setTimeout(function(){

        precioCrunchy.classList.remove("cambiar");

    },250);

});

// ================================
// VIKI
// ================================

const tipoViki = document.getElementById("tipo-viki");

const precioViki = document.getElementById("precio-viki");

tipoViki.addEventListener("change", function(){

    if(tipoViki.value=="Pantalla"){

        precioViki.textContent="$6.000";
    }

    else if(tipoViki.value=="Cuenta"){

        precioViki.textContent="$10.000";
    }

    precioViki.classList.add("cambiar");

    setTimeout(function(){

        precioViki.classList.remove("cambiar");

    },250);

});

// ================================
// CANVA PRO
// ================================

const tipoCanva = document.getElementById("tipo-canva");

const precioCanva = document.getElementById("precio-canva");

tipoCanva.addEventListener("change", function(){

    precioCanva.textContent="$6.500";

    precioCanva.classList.add("cambiar");

    setTimeout(function(){

        precioCanva.classList.remove("cambiar");

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
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Netflix*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// Disney+
document.getElementById("btn-disney").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-disney").value;

    const mensaje =
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Disney+*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// Prime Video
document.getElementById("btn-prime").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-prime").value;

    const mensaje =
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Prime Video*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// HBO Max
document.getElementById("btn-hbo").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-hbo").value;

    const mensaje =
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *HBO Max*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

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
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Spotify Premium*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// Apple TV+
document.getElementById("btn-apple").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-apple").value;

    const mensaje =
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Apple TV+*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// Paramount+
document.getElementById("btn-paramount").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-paramount").value;

    const mensaje =
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Paramount+*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

// Crunchyroll
document.getElementById("btn-crunchy").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-crunchy").value;

    const mensaje =
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Crunchyroll*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );
    
});

// Viki
document.getElementById("btn-viki").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-viki").value;

    const mensaje =
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Viki*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );
});

// Canva
document.getElementById("btn-canva").addEventListener("click", function(e){

    e.preventDefault();

    const tipo = document.getElementById("tipo-canva").value;

    const mensaje =
`👋 ¡Hola Magic Screens!

Estoy interesado en adquirir *Canva Pro*.

📦 Tipo seleccionado:
${tipo}

¿Podrían ayudarme con el proceso de compra? ¡Muchas gracias! 😊`;

    window.open(
        "https://wa.me/573107077024?text=" + encodeURIComponent(mensaje),
        "_blank"
    );

});

