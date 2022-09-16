const btnCopy = document.querySelector(".copy-button");
btnCopy.addEventListener("click", (event)=>{
    event.preventDefault();
    const output =document.querySelector("#text-encryter-or-decrypted")
    output.select();
    document.execCommand('copy');
    output.value="";
    btnCopy.textContent = "El mensaje fue copiado con Exito"
});