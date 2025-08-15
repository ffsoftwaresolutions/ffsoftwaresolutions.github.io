
// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#primary-menu');
if (navToggle && menu){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    menu.style.display = expanded ? 'none' : 'flex';
  });
}

// Theme toggle
const themeBtn = document.querySelector('.theme-toggle');
const root = document.documentElement;
const THEME_KEY = 'prefers-theme';
function setTheme(t){ document.documentElement.dataset.theme = t; localStorage.setItem(THEME_KEY,t); }
function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if(saved){ setTheme(saved); }
}
if (themeBtn){
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'auto';
    const next = current === 'dark' ? 'light' : current === 'light' ? 'auto' : 'dark';
    setTheme(next);
  });
}
initTheme();
