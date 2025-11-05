document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      fetch(form.action, {method:'POST', body:data})
      .then(() => alert('Gracias por tu mensaje. Te responderé lo antes posible.'))
      .catch(() => alert('Error al enviar. Inténtalo de nuevo.'));
      form.reset();
    });
  }
});
