(function(){
  // Mobile menu
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if(toggle && menu){
    toggle.addEventListener('click', ()=>{
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Theme toggle with localStorage
  const html = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){ html.classList.add('light'); }
  themeBtn && themeBtn.addEventListener('click', ()=>{
    html.classList.toggle('light');
    localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
  });

  // Active nav link
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === here){ a.classList.add('active'); }
  });

  // Footer date
  const el = document.getElementById('lastUpdated');
  if (el) el.textContent = new Date().toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'});
})();
