 var copia = document.querySelector('.copia');
    function copy() {

        var inputCode = document.querySelector('#encrypted-text');
        inputCode.select();
        document.execCommand("#copie");

    }

   document.querySelector("#copie").addEventListener("click", copy)