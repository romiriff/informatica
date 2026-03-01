let actual = 0;

let texturas = [
  "imagenes/texxxxx.JPG",
  "imagenes/textura2.JPG",
  "imagenes/textura3.JPG"
];

const comentarios = [
  "Observá los detalles de la luz y el contraste.",
  "Fijate en la textura de la superficie, parece distinta.",
  "Mirá cómo los colores coinciden con la textura."
];

function cambiarTextura() {
  actual++;
  if (actual > 2) actual = 0;
  document.getElementById("textura").src = texturas[actual];
  document.getElementById("resultado").innerText = "";
}

function verificar(indice) {
  if (indice === actual) {
    document.getElementById("resultado").innerText =
      "¡Correcto! La textura coincide perfectamente, muy buena observación ✨";
  } else {
    const randomIndex = Math.floor(Math.random() * comentarios.length);
    document.getElementById("resultado").innerText =
      "No es esta. " + comentarios[randomIndex];
  }
}

