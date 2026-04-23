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

  // Si adivina
  if (numero === numeroSecreto) {
    mensaje.textContent = "¡ADIVINASTE!";
    mensaje.style.color = "green";

  // Si está entre 1 y 5
  } else if (numero >= 1 && numero <= 5) {
    mensaje.textContent = "El número es MENOR";
    mensaje.style.color = "blue";

  // Si está entre 6 y 10
  } else if (numero >= 6 && numero <= 10) {
    mensaje.textContent = "El número es MAYOR";
    mensaje.style.color = "blue";

  } else {
    mensaje.textContent = "Escribe un número del 1 al 10";
    mensaje.style.color = "red";
  }
}

function reiniciar() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  document.getElementById("numero").value = "";
  document.getElementById("mensaje").textContent = "Nuevo juego iniciado";
  document.getElementById("mensaje").style.color = "black";
}
