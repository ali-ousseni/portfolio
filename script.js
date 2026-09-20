// Portfolio BTS SIO — Benianic Ali Ousseni
// Gestion du menu hamburger sur petits écrans

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');

  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', function () {
    var isOpen = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  // Ferme le menu si on clique sur un lien (utile en navigation entre pages)
  sidebar.querySelectorAll('.nav-list a').forEach(function (link) {
    link.addEventListener('click', function () {
      sidebar.classList.remove('open');
    });
  });

  // Bouton retour en haut de page
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
