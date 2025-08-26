 // Script para el acordeón de Preguntas Frecuentes (FAQ)

 
  document.addEventListener('DOMContentLoaded', () => {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const answer = toggle.nextElementSibling;
        const icon = toggle.querySelector('svg');
        const isCurrentlyOpen = answer.style.maxHeight !== '0px';

        // Primero, cierra todas las respuestas para un efecto de acordeón limpio.
        document.querySelectorAll('.faq-answer').forEach(ans => {
          ans.style.maxHeight = '0px';
          ans.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
        });

        // Si la que se clickeó no estaba abierta, la abre.
        // Si ya estaba abierta, el paso anterior la habrá cerrado.
        if (!isCurrentlyOpen) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          icon.classList.add('rotate-180');
        }
      });
    });
  });