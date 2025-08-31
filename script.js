// script.js
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Helpers ----------
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const toast = (msg = '') => {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  };

  // ---------- Copiar e-mail ----------
  const emailBtn  = $('#copy-email');
  const emailLink = $('#email-link');
  if (emailBtn && emailLink) {
    emailBtn.addEventListener('click', async () => {
      try {
        const email = (emailLink.textContent || '').trim();
        await navigator.clipboard.writeText(email);
        toast('E-mail copiado!');
      } catch {
        toast('Não foi possível copiar.');
      }
    });
  }

  // ---------- WhatsApp com mensagem padrão ----------
  const wa = $('#wa-link');
  if (wa) {
    const texto = encodeURIComponent('Olá! Vim pelo site da ONG Novos Herdeiros e gostaria de saber mais.');
    if (!wa.href.includes('text=')) wa.href = `${wa.href}?text=${texto}`;
  }

  // ---------- Realce do menu conforme seção visível ----------
  const sections = [
    { el: document.body, id: '#top' },
    { el: $('#projetos'), id: '#projetos' },
    { el: $('#contato'),  id: '#contato' }
  ].filter(s => s.el);

  const menuLinks = $$('.nav__menu a');

  if (sections.length && menuLinks.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      const vis = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!vis) return;
      const id = sections.find(s => s.el === vis.target)?.id;
      if (!id) return;
      menuLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === id));
    }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.2, 0.6, 1] });

    sections.forEach(s => obs.observe(s.el));
  }

  // ---------- Google Maps (se usar botão) ----------
  window.openGoogleMaps = function openGoogleMaps() {
    window.open('https://www.google.com/maps?q=Rua+M%C3%A1rio+Grazini,+100+Vila+Santo+Estefano,+Cep+04153-150', '_blank');
  };

  // ---------- Fallback de smooth scroll (Safari antigo) ----------
  if (!('scrollBehavior' in document.documentElement.style)) {
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        const target = id && id !== '#' ? $(id) : document.body;
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', id);
      });
    });
  }
});
