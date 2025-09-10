 // Animación de entrada para todas las secciones con fade-in

  
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 200);
    });
  });