// Aprender a manipular o DOM
// Definir qual elemento do HTML eu vou pegar, e o
/*
    Localizadores - ID mais comum #id
                    CLASSE          .classe
*/

// Pegar elementos HTML
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const botao = document.getElementById('enviar');

// Função para validar campos
function validarCampos() {
    const usuarioValor = usuario.value.trim();
    const senhaValor = senha.value.trim();
    
    if (!usuarioValor) {
        alert('O campo CPF ou email está vazio e é inválido.');
        return false;
    }
    if (!senhaValor) {
        alert('O campo senha está vazio e é inválido.');
        return false;
    }
    return true;
}

// Adicionar evento de clique ao botão
botao.addEventListener('click', (event) => {
    // Previne o comportamento padrão do botão de envio
    event.preventDefault();
    
    if (validarCampos()) {
        const usuarioValor = usuario.value;
        const senhaValor = senha.value;

        console.log(usuarioValor, senhaValor);
        
        // Exibe o alerta ao clicar no botão de envio
        alert('Login enviado!');
    }
});

// Adicionar evento de envio ao formulário
document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    if (validarCampos()) {
        alert('Login enviado!');
    }
});
