document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function confirmacaoEmail(){
    var email = document.getElementById('email').value;
    if(email !== ''){
        alert("Email enviado com sucesso!");
    } else{
        alert("Por favor, insira um email válido")
    }
    
}

document.getElementById('cor').addEventListener('input', function() {
    var corSelecionada = this.value;
    console.log('Cor selecionada: ' + corSelecionada);
});




