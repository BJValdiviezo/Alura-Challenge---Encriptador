var input =document.querySelector("#text");
var button = document.querySelector("#encryptor");

button.addEventListener("click", function(){
var encrypted = document.querySelector("#encrypted-text");
var expresionA = new RegExp("[a]","ig");
var expresionE = new RegExp("[e]","gi");
var expresionI = new RegExp("[i]","gi");
var expresionO = new RegExp("[o]","gi");
var expresionU = new RegExp("[u]","gi");
encrypted.value= input.value.replace(expresionE,"enter").replace(expresionI,"imes").replace(expresionA,"ai").replace(expresionO,"ober").replace(expresionU,"ufat");
});
