var inputCode = document.querySelector('#encrypted-text');
    var boton = document.querySelector('#copie');
    var copia = document.querySelector('.copia');

    function botonHandler() {

        copia.textContent = inputCode.value;
        inputCode.value = "";

    }

    boton .addEventListener('click', botonHandler);