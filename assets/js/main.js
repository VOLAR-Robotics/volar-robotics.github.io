(function () {
  'use strict';

  // Smooth scroll handled by CSS; close mobile nav on anchor click
  var toggle = document.getElementById('nav-toggle');
  if (toggle) {
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { toggle.checked = false; });
    });
  }

  // Email obfuscation — reconstruct mailto: only on user interaction, never in static HTML
  document.querySelectorAll('.js-email').forEach(function (a) {
    function build() { a.href = 'mailto:' + a.dataset.u + '@' + a.dataset.d; }
    a.addEventListener('mouseenter', build);
    a.addEventListener('focus', build);
    a.addEventListener('touchstart', build, { passive: true });
  });

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
