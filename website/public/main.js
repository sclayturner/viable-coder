(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = document.querySelector('nav.top');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const toggle = nav.querySelector('.nav-toggle');
    const navLinks = nav.querySelector('.nav-links');
    if (toggle && navLinks) {
      const closeMenu = () => {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      };
      const openMenu = () => {
        navLinks.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
      };
      toggle.addEventListener('click', () => {
        if (navLinks.classList.contains('is-open')) closeMenu();
        else openMenu();
      });
      navLinks.addEventListener('click', (e) => {
        if (e.target.closest('a')) closeMenu();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
          closeMenu();
          toggle.focus();
        }
      });
      // Reset state if the viewport grows past mobile while the menu is open
      const mql = window.matchMedia('(min-width: 761px)');
      const onMqlChange = (ev) => { if (ev.matches) closeMenu(); };
      if (mql.addEventListener) mql.addEventListener('change', onMqlChange);
      else if (mql.addListener) mql.addListener(onMqlChange);
    }
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }

  // Mark hero reveals immediately on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.q-hero .reveal, .surface-hero .reveal, .page-band .reveal').forEach((el) => el.classList.add('in'));
  });

  // EXPANDABLE CARDS — keep only one card open at a time.
  const expandCards = Array.from(document.querySelectorAll('details.expand-card'));
  const closeOtherExpandCards = (activeCard) => {
    expandCards.forEach((card) => {
      if (card !== activeCard) card.open = false;
    });
  };

  expandCards.forEach((card) => {
    card.addEventListener('toggle', () => {
      if (card.open) closeOtherExpandCards(card);
    });
  });

  const openHashExpandCard = () => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target && target.matches('details.expand-card')) {
      target.open = true;
      closeOtherExpandCards(target);
    }
  };

  openHashExpandCard();
  window.addEventListener('hashchange', openHashExpandCard);

  // FILTER PILLS — generic toggle across .filter-bar groups
  // Pills with data-filter attribute will toggle active state and filter feed items
  // by matching tags in data-tags attribute. Default pill is .filter-pill[data-filter="all"].
  document.querySelectorAll('.filter-bar').forEach((bar) => {
    const pills = bar.querySelectorAll('.filter-pill[data-filter]');
    const feedSelector = bar.getAttribute('data-feed');
    if (!feedSelector) return;
    const feed = document.querySelector(feedSelector);
    if (!feed) return;
    const items = feed.querySelectorAll('.feed-item[data-tags]');

    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.getAttribute('data-filter');
        items.forEach((item) => {
          const tags = (item.getAttribute('data-tags') || '').split(/\s+/);
          if (filter === 'all' || tags.includes(filter)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  // DEEP-LINK FILTER ACTIVATION — e.g. resources.html#EDD activates the EDD pill
  const activateHashFilter = () => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    document.querySelectorAll('.filter-bar').forEach((bar) => {
      const pill = bar.querySelector(`.filter-pill[data-filter="${CSS.escape(hash)}"]`);
      if (pill) {
        pill.click();
        bar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  activateHashFilter();
  window.addEventListener('hashchange', activateHashFilter);
})();
