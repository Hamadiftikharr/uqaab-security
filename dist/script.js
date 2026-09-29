const icons={database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 10c0 4 16 4 16 0M4 15c0 4 16 4 16 0"/>',arrows:'<path d="M3 7h18m-5-5 5 5-5 5M21 17H3m5-5-5 5 5 5"/>',chart:'<path d="M3 21V14h4v7zm7 0V8h4v13zm7 0V2h4v19z"/>',layers:'<path d="m12 2 10 5-10 5L2 7zm-10 10 10 5 10-5M2 17l10 5 10-5"/>',coins:'<circle cx="15" cy="6" r="4"/><path d="M15 3v6m2-5h-3c-2 0-2 2 0 2h2c2 0 2 2 0 2h-3M2 14h5l3-3h5c3 0 3 4 0 4h-4m-4 0 6 3 7-5c3-2 5 1 2 3l-8 6-9-3H2z"/>',dollar:'<circle cx="12" cy="12" r="10"/><path d="M12 5v14m4-11h-6a3 3 0 0 0 0 6h4a2 2 0 0 1 0 4H8"/>',leaf:'<path d="M4 20c0-8 8-12 16-16 0 11-4 16-12 15M4 22l8-12"/>',shield:'<path d="m12 2 9 4c0 9-4 14-9 16C7 20 3 15 3 6zm-5 9 4 4 6-7"/>',link:'<path d="m10 14 4-4M8 15l-2 2a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m2 3 2-2a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(1 0)"/>',grid:'<path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-8z"/>',diamond:'<path d="m2 9 5-6h10l5 6-10 13zm0 0h20M8 3l-3 6 7 13 7-13-3-6"/>',warning:'<path d="m12 3 10 18H2zM12 9v5m0 3v1"/>',code:'<path d="m8 5-7 7 7 7m8-14 7 7-7 7M14 3l-4 18"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 7 7"/>',file:'<path d="M14 2H4v20h16V8zm0 0v6h6M8 13h8m-8 4h6"/>'};
function drawIcons(){document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[el.dataset.icon]||icons.shield}</svg>`;});}
drawIcons();
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));}});},{rootMargin:'-15% 0px -65% 0px'});
document.querySelectorAll('section[id]').forEach(section=>observer.observe(section));
let toastTimer;function showToast(message){const toast=document.querySelector('.toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),4500);}
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{
  document.getElementById('review-service').value=link.dataset.service;
  const selection=document.getElementById('service-selection');
  selection.textContent='Interested in: '+link.dataset.service;
  selection.hidden=false;
}));
document.getElementById('audit-request').addEventListener('submit',submitAuditRequest);
