(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var heroBg = document.getElementById('heroBg');

  function onScroll() {
    var scrollY = window.scrollY;

    // Nav opacity
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Hero parallax
    if (heroBg) {
      heroBg.style.transform = 'translateY(' + (scrollY * 0.38) + 'px)';
    }

    // Section parallax
    var parallaxBgs = document.querySelectorAll('.parallax-bg');
    for (var i = 0; i < parallaxBgs.length; i++) {
      var el = parallaxBgs[i];
      var section = el.parentElement;
      var rect = section.getBoundingClientRect();
      var mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = 'translateY(' + (mid * 0.18) + 'px)';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav
  var hamburger = document.querySelector('.nav-hamburger');
  var overlay = document.querySelector('.nav-mobile-overlay');
  var closeBtn = document.querySelector('.nav-mobile-close');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', function () {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    var overlayLinks = overlay.querySelectorAll('a');
    for (var j = 0; j < overlayLinks.length; j++) {
      overlayLinks[j].addEventListener('click', function () {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  // Contact form feedback
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.form-submit');
      var original = btn.textContent;
      btn.textContent = 'TRANSMISSION SENT';
      btn.style.background = '#4A5D3A';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3200);
    });
  }
})();
