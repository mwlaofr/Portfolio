document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('toggle-code').addEventListener('click', function() {
    var codigo = document.getElementById('codigo-completo');
    if (codigo.style.display === 'none') {
        codigo.style.display = 'block';
        this.textContent = 'Ocultar Código Completo';
    } else {
        codigo.style.display = 'none';
        this.textContent = 'Mostrar Código Completo';
    }
});
