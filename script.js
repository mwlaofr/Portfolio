

document.querySelectorAll('a[href^="#"]').forEach(anchor => { //suavizar qnd clica opções do header
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() { //carregar primeiro q o html
    const scrollContainer = document.getElementById('scrollContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    function cloneItems() {
        const cards = document.querySelectorAll('.conteudo .card');
        const cloneCount = 2; // número de clones

        for (let i = 0; i < cloneCount; i++) {
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                scrollContainer.appendChild(clone);
            });
        }
    }

    cloneItems(); // clona os cards

    leftArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -250,
            behavior: 'smooth'
        });

        if (scrollContainer.scrollLeft === 0) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
    });

    rightArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: 250,
            behavior: 'smooth'
        });

        if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
    });
});

//Função chamada quando a cor é alterada
function alterarCorBotao() {
    // Seleciona o botão de enviar
    const botaoEnviar = document.getElementById('botaoEnviar');
    // Obtém a cor escolhida
    const corEscolhida = document.getElementById('cor').value;
    // Aplica a cor no botão
    botaoEnviar.style.backgroundColor = corEscolhida;
}
document.getElementById('cor').addEventListener('change', alterarCorBotao);


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
    console.log('Cor selecionada: ' + corSelecionada); //mudar cor do botao
});


