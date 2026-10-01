const gallery = document.querySelector('#gallery');
const projects = window.SITE_DATA?.projects || [];

gallery.innerHTML = projects.map((p, i) => `
  <article class="work ${p.featured ? 'featured' : ''} reveal">
    <div class="work-img">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <div class="work-price">${p.price}</div>
    </div>
    <div class="work-cap">
      <div>
        <h3>${p.title}</h3>
        <p>${p.type}</p>
        <small>${p.material}</small>
      </div>
      <span>${String(i+1).padStart(2,'0')}</span>
    </div>
  </article>`).join('');

const menuBtn = document.querySelector('#menu');
if (menuBtn) menuBtn.addEventListener('click',()=>document.querySelector('#nav')?.classList.toggle('open'));

// Scroll reveal animation
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Subtle parallax for large editorial photography
const parallaxItems = [...document.querySelectorAll('.hero-photo img,.detail-strip img,.signature-image img')];
let ticking=false;
function updateParallax(){
  const vh=window.innerHeight;
  parallaxItems.forEach(img=>{
    const rect=img.parentElement.getBoundingClientRect();
    if(rect.bottom>0 && rect.top<vh){
      const center=rect.top+rect.height/2-vh/2;
      const y=Math.max(-18,Math.min(18,-center*.025));
      img.style.transform=`scale(1.035) translateY(${y}px)`;
    }
  });
  ticking=false;
}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateParallax);ticking=true;}},{passive:true});
updateParallax();

// Pause looping videos when they are far offscreen to reduce load
const videos=document.querySelectorAll('video[autoplay]');
const videoObserver=new IntersectionObserver((entries)=>{
  entries.forEach(({target,isIntersecting})=>{
    if(isIntersecting){target.play().catch(()=>{});}else{target.pause();}
  });
},{rootMargin:'180px 0px'});
videos.forEach(v=>videoObserver.observe(v));
