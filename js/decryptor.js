var button = document.querySelector("#decryptor");

button.addEventListener("click", (event)=>{
    const form = document.querySelector("#form-text")
    var massagesEncrypted = document.querySelector("#text");
    var output = document.querySelector("#encrypted-text");
    var expresionO = /ober/gi;
    var expresionA = /ai/gi;
    var expresionE = /enter/gi;
    var expresionI = /imes/gi;
    var expresionU = /ufat/gi;
    output.value = massagesEncrypted.value.toLowerCase().replace(expresionE, "e").replace(expresionI, "i").replace(expresionA, "a").replace(expresionO, "o").replace(expresionU, "u");
    form.reset();
});