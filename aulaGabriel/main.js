//aprender a manupular o DOM
//definir qual elemento do HTML eu vou pegar, e o
/*
    Localizadores - ID mais comum #id
                CLASSE          .classe
*/
//Pegar um elemento HTML
const usuario = document.getElementById('usuario').value;
const senha = document.querySelector('#senha').value;

const botao = document.querySelector('#enviar');

botao.addEventListener("click", ()=>{
    const usuario = document.getElementById('usuario').value;
    const senha = document.getSelector('#senha').value;

    console.log(usuario,senha);
});
