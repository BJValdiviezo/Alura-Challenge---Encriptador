var input =document.querySelector("#text");
var button = document.querySelector("#decryptor");

button.addEventListener("click", function(){
var decrypted = document.querySelector("#encrypted-text");
var expresionO = /ober/gi;
var expresionA = /ai/gi;
var expresionE = /enter/gi;
var expresionI = /imes/gi;
var expresionU = /ufat/gi;
decrypted.value= input.value.toLowerCase().replace(expresionE, "e").replace(expresionI,"i").replace(expresionA,"a").replace(expresionO,"o").replace(expresionU,"u");
});