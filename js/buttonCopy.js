const btnCopy = document.querySelector("#copy");
btnCopy.addEventListener("click", ()=>{
    const form = document.querySelector("#form-text")
    const output =document.querySelector("#encrypted-text")
    output.select();
    document.execCommand('copy');
    form.reset();
});