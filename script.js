window.onload = function () {
    // Variables

    // A�adir las tres im�genes del directorio "img" al array IMAGENES.
    const IMAGENES = [];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    // posici�n actual guarda el indice de la im�gen que se est� mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder
    let $botonAvanzar 
    let $imagen 
    let $botonPlay 
    let $botonStop

    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        // se incrementa el indice (posicionActual)

        // ...y se muestra la imagen que toca.
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        // se incrementa el indice (posicionActual)

        // ...y se muestra la imagen que toca.
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        // Documentaci�n de la funci�n setInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
        // Mediante la funci�n setInterval() se ejecuta la funci�n pasarFoto cada TIEMPO_INTERVALO_MILESIMAS_SEG.
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);

        // Desactivamos los botones de control necesarios. Utilizando setAttribute y removeAttribute.

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        // Desactivar la ejecuci�n de intervalo.

        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
    }

    // Eventos
    // A�adimos los evenntos necesarios para cada boton. Mediante addEventListener.

    // Iniciar
    renderizarImagen();
} 
