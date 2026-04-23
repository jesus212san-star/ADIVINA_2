// Generar número secreto aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Obtener elementos del HTML
const input = document.getElementById('numeroInput');
const btnComprobar = document.getElementById('btnComprobar');
const btnReiniciar = document.getElementById('btnReiniciar');
const mensaje = document.getElementById('mensaje');

// Función para comprobar el número
btnComprobar.addEventListener('click', () => {
    const numeroUsuario = parseInt(input.value);

    // Validar que sea un número correcto
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.textContent = "⚠️ Por favor, escribe un número válido entre 1 y 100.";
        mensaje.style.color = "yellow";
        return;
    }

    // Comparar
    if (numeroUsuario === numeroSecreto) {
        mensaje.textContent = "🎉 ¡ADIVINASTE! ¡Felicidades!";
        mensaje.style.color = "#00ff00";
    } 
    else if (numeroUsuario < numeroSecreto) {
        mensaje.textContent = "⬆️ El número es MAYOR";
        mensaje.style.color = "#ffcc00";
    } 
    else {
        mensaje.textContent = "⬇️ El número es MENOR";
        mensaje.style.color = "#ff6b6b";
    }
});

// Función para reiniciar el juego
btnReiniciar.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    mensaje.textContent = "🔄 Juego reiniciado. ¡Adivina el nuevo número!";
    mensaje.style.color = "white";
});
