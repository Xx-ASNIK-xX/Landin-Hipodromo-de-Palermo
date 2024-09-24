// Duración estimada del GIF (por ejemplo, 5 segundos por repetición)
const gifDuration = 50000; // 5 segundos

// Número de repeticiones que quieres
const repetitions = 3;

// Esperar a que el DOM esté completamente cargado
window.onload = () => {
  // Ocultar GIF tras las repeticiones
  setTimeout(() => {
    document.getElementById('gifImage').style.display = 'none';
  }, gifDuration * repetitions);
};