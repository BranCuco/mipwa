// Función para guardar la nota
function guardarNota() {
  const texto = document.getElementById('nota').value;
  localStorage.setItem('nota', texto);
  alert('¡Nota guardada!');
}

// Cargar la nota al iniciar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  const texto = localStorage.getItem('nota');
  if (texto) {
    document.getElementById('nota').value = texto;
  }
});

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(error => console.error('Fallo en el registro', error));
}