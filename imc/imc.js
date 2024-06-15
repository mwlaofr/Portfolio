document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imc-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateIMC();
    });

    function calculateIMC() {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            displayResult('Por favor insira valores válidos');
            return;
        }

        const imc = peso / (altura * altura);
        let category = '';

        if (imc < 18.5) {
            category = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            category = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            category = 'Acima do peso';
        } else {
            category = 'Obeso';
        }

        displayResult(`Seu IMC é ${imc.toFixed(2)} (${category}).`);
    }

    function displayResult(message) {
        const resultDiv = document.getElementById('resultado');
        resultDiv.textContent = message;
    }
});
