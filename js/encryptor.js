var btn = document.querySelector(".encryptor-button");
console.log(btn);
btn.addEventListener("click",(evento)=>{
    evento.preventDefault();
    const messages = document.querySelector("#text");
    const output = document.querySelector("#text-encryter-or-decrypted");
    var expresionA = new RegExp("[a]","gi");
    var expresionE = new RegExp("[e]","gi");
    var expresionI = new RegExp("[i]","gi");
    var expresionO = new RegExp("[o]","gi");
    var expresionU = new RegExp("[u]","gi");
    output.value = messages.value.replace(expresionE,"enter").replace(expresionI,"imes").replace(expresionA,"ai").replace(expresionO,"ober").replace(expresionU,"ufat");
    messages.value="";
});
