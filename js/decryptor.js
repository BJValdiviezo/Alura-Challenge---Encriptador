var btn = document.querySelector(".decryptor-button");

btn.addEventListener("click", (evento)=>{
    evento.preventDefault();
    const messagesEncrypted = document.querySelector("#text");
    var output = document.querySelector("#text-encryter-or-decrypted");
    var expresionO = /ober/gi;
    var expresionA = /ai/gi;
    var expresionE = /enter/gi;
    var expresionI = /imes/gi;
    var expresionU = /ufat/gi;
    output.value = messagesEncrypted.value.toLowerCase().replace(expresionE, "e").replace(expresionI, "i").replace(expresionA, "a").replace(expresionO, "o").replace(expresionU, "u");
    messagesEncrypted.value= "";
});