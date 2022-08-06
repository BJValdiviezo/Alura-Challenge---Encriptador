const btn = document.querySelector("[data-encripted]")
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    const form = document.querySelector("#form-text");
    const messages = document.querySelector("#text");
    const output = document.querySelector("#encrypted-text");
    var expresionA = new RegExp("[a]","gi");
    var expresionE = new RegExp("[e]","gi");
    var expresionI = new RegExp("[i]","gi");
    var expresionO = new RegExp("[o]","gi");
    var expresionU = new RegExp("[u]","gi");
    output.value = messages.value.toLowerCase().replace(expresionE,"enter").replace(expresionI,"imes").replace(expresionA,"ai").replace(expresionO,"ober").replace(expresionU,"ufat");
    form.reset();
});
