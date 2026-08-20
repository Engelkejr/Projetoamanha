
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
  });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  function closeMobile() {
    mobileMenu.classList.remove('open');
  }

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  function enviarWhatsApp() {
  const nome = document.querySelector('[name="nome"]').value;
  const whatsapp = document.querySelector('[name="whatsapp"]').value;
  const interesse = document.querySelector('[name="interesse"]').value;
  const mensagem = document.querySelector('[name="mensagem"]').value;

  if (!nome || !whatsapp) { 
    alert('Por favor, preencha o seu nome e WhatsApp.'); 
    return; 
  }

  const texto = `Olá! Meu nome é ${nome} e quero colaborar com o Projeto O Amanhã.%0A*Interesse:* ${interesse || 'Não informado'}%0A${mensagem ? '*Mensagem:* ' + mensagem : ''}%0A%0A*WhatsApp para contato:* ${whatsapp}`;

  window.open(`https://wa.me/5521997571414?text=${texto}`, '_blank');
}

  document.querySelector('.btn-ajudar-azul').addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('47387932000170').then(() => {
      const btn = e.target;
      btn.textContent = '✅ Chave copiada!';
      setTimeout(() => btn.textContent = 'Copiar chave PIX →', 2500);
    }).catch(() => alert('Chave PIX: 47387932000170'));
  });
