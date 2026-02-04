(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupMobileNav();
    setupNavbarScroll();
    setupActiveNavTracking();
    setupScrollAnimations();
    setFooterYear();
  }

  function setupMobileNav() {
    var toggle = document.querySelector('.nav__toggle');
    var navList = document.querySelector('.nav__list');
    if (!toggle || !navList) return;

    toggle.addEventListener('click', function () {
      var isOpen = navList.classList.toggle('nav-open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    navList.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('nav-open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navList.contains(e.target) && !toggle.contains(e.target)) {
        navList.classList.remove('nav-open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function setupNavbarScroll() {
    var header = document.querySelector('.site-header');
    var hero = document.querySelector('.hero');
    if (!header || !hero) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          header.classList.toggle('scrolled', !entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: '-72px 0px 0px 0px' }
    );

    observer.observe(hero);
  }

  function setupActiveNavTracking() {
    var sections = document.querySelectorAll('.section[id]');
    var navLinks = document.querySelectorAll('.nav__link');
    if (!sections.length || !navLinks.length) return;

    function updateActiveLink() {
      var offset = window.scrollY + 120;
      var current = '';

      sections.forEach(function (section) {
        if (section.offsetTop <= offset) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(function (link) {
        link.classList.toggle(
          'nav__link--active',
          link.getAttribute('href') === '#' + current
        );
      });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  }

  function setupScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function setFooterYear() {
    var yearEl = document.querySelector('.footer-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }
})();
