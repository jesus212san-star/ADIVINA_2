let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function comprobar() {
  let input = document.getElementById("numero").value;
  let numero = Number(input);
  let mensaje = document.getElementById("mensaje");

  if (input === "") {
    mensaje.textContent = "Escribe un número";
    mensaje.style.color = "red";
    return;
  }

  if (numero > numeroSecreto) {
    mensaje.textContent = "El número es mayor";
    mensaje.style.color = "blue";
  } else if (numero < numeroSecreto) {
    mensaje.textContent = "El número es menor";
    mensaje.style.color = "blue";
  } else {
    mensaje.textContent = "¡ADIVINASTE!";
    mensaje.style.color = "green";
  }
}

function reiniciar() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  document.getElementById("numero").value = "";
  document.getElementById("mensaje").textContent = "Nuevo juego iniciado";
}
