/* ================================================================
   Bahia Tecnologia — main.js
   Mobile menu · Smooth scroll · FAQ accordion · Form handler
   ================================================================ */

(function () {
  'use strict';

  /* ── Navbar scroll state ──────────────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu ──────────────────────────────────────────────── */
  const burgerBtn = document.querySelector('.navbar__burger');
  const mobileMenu = document.querySelector('.navbar__mobile');

  if (burgerBtn && mobileMenu) {
    const openMenu = () => {
      burgerBtn.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      // Move focus to first link
      const firstLink = mobileMenu.querySelector('a');
      if (firstLink) firstLink.focus();
    };

    const closeMenu = () => {
      burgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
      burgerBtn.focus();
    };

    burgerBtn.addEventListener('click', () => {
      const isOpen = burgerBtn.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close when clicking a link inside
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ── FAQ Accordion ────────────────────────────────────────────── */
  document.querySelectorAll('.faq__question').forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      if (!answer) return;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // Close all others in same .faq group
      const faqGroup = btn.closest('.faq');
      if (faqGroup) {
        faqGroup.querySelectorAll('.faq__question').forEach((other) => {
          if (other !== btn) {
            other.setAttribute('aria-expanded', 'false');
            const otherAnswer = other.nextElementSibling;
            if (otherAnswer) otherAnswer.classList.remove('is-open');
          }
        });
      }
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.classList.toggle('is-open', !isOpen);
    });
  });

  /* ── Contact form handler ─────────────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const successMsg = document.getElementById('form-success');

    const validateField = (field) => {
      const parent = field.closest('.form__field');
      const errorEl = parent && parent.querySelector('.form__error');
      let msg = '';

      if (field.required && !field.value.trim()) {
        msg = 'Este campo é obrigatório';
      } else if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        msg = 'Escreve um e-mail válido, por favor';
      } else if (field.name === 'telefone' && field.value && field.value.replace(/\D/g, '').length < 10) {
        msg = 'WhatsApp precisa ter ao menos 10 dígitos (com DDD)';
      } else if (field.name === 'mensagem' && field.value && field.value.trim().length < 10) {
        msg = 'Conta mais um pouco';
      }

      if (parent) parent.classList.toggle('has-error', !!msg);
      if (errorEl) errorEl.textContent = msg;
      return !msg;
    };

    // Validate on blur
    contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('blur', () => validateField(field));
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
        if (!validateField(field)) valid = false;
      });

      if (!valid) return;

      // Build WhatsApp fallback message
      const nome = contactForm.querySelector('[name="nome"]')?.value || '';
      const segmento = contactForm.querySelector('[name="segmento"]')?.value || '';
      const mensagem = contactForm.querySelector('[name="mensagem"]')?.value || '';
      const waText = encodeURIComponent(
        `Olá! Me chamo ${nome}. Segmento: ${segmento}. ${mensagem}`
      );

      if (successMsg) {
        successMsg.classList.add('is-visible');
        successMsg.textContent = 'Recebemos sua mensagem! A gente responde em até 4h. Pode relaxar.';
      }
      contactForm.style.display = 'none';

      // Also open WhatsApp after a brief delay
      setTimeout(() => {
        window.open(
          `https://wa.me/5571999999999?text=${waText}`,
          '_blank',
          'noopener,noreferrer'
        );
      }, 1200);
    });
  }

  /* ── Smooth scroll for in-page anchor links ───────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ── Active nav link ──────────────────────────────────────────── */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.navbar__nav a, .navbar__mobile a').forEach((link) => {
    const href = link.getAttribute('href')?.replace(/\/$/, '') || '';
    if (href && (currentPath === href || (href !== '/' && currentPath.startsWith(href)))) {
      link.setAttribute('aria-current', 'page');
    }
  });

})();
