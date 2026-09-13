const menuButton = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');

if (menuButton && siteNav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    siteNav.dataset.open = 'false';
    document.body.classList.remove('nav-open');
  };

  menuButton.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(willOpen));
    siteNav.dataset.open = String(willOpen);
    document.body.classList.toggle('nav-open', willOpen);
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const mapButton = document.querySelector('[data-load-map]');
const mapShell = document.querySelector('[data-map-shell]');

if (mapButton && mapShell) {
  mapButton.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.title = 'Map showing the Solutions Unlimited Counseling office in Scottsdale, Arizona';
    iframe.src = mapButton.dataset.mapSrc;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.allowFullscreen = true;
    mapShell.replaceChildren(iframe);
  }, { once: true });
}
