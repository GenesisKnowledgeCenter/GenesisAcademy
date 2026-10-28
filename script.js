const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),450));

const nav=document.querySelector('.navbar');
const progress=document.querySelector('.scroll-progress');
const backToTop=document.querySelector('.back-to-top');
window.addEventListener('scroll',()=>{
 const scrolled=window.scrollY>30;
 nav?.classList.toggle('scrolled',scrolled);
 const h=document.documentElement;
 const pct=(h.scrollTop)/((h.scrollHeight-h.clientHeight)||1)*100;
 if(progress)progress.style.width=pct+'%';
 backToTop?.classList.toggle('show',window.scrollY>500);
});

const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
const overlay=document.querySelector('.nav-overlay');
function closeMenu(){links?.classList.remove('open');menu?.classList.remove('open');overlay?.classList.remove('show');document.body.style.overflow='';}
function toggleMenu(){
 const isOpen=links?.classList.toggle('open');
 menu?.classList.toggle('open',isOpen);
 overlay?.classList.toggle('show',isOpen);
 document.body.style.overflow=isOpen?'hidden':'';
}
menu?.addEventListener('click',toggleMenu);
overlay?.addEventListener('click',closeMenu);
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

backToTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const footer=document.querySelector('.footer');
if(footer){
 footer.innerHTML=`<div class="container footer-grid"><div><img src="assets/images/genesis-logo.png" alt="Genesis Academy"><p>Genesis Academy is a place where students learn, grow and discover new opportunities through technology, coding, robotics and digital skills.</p></div><div><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="programs.html">Our Programs</a></li><li><a href="partners.html">Our Partners</a></li><li><a href="team.html">Our Team</a></li><li><a href="contact.html">Contact Us</a></li></ul></div><div><h4>Programs</h4><ul><li><a href="programs.html">ICT &amp; Coding</a></li><li><a href="programs.html">Robotics &amp; Arduino</a></li><li><a href="programs.html">English</a></li><li><a href="programs.html">Mechatronics</a></li><li><a href="programs.html">AI &amp; Modern Technology</a></li></ul></div><div><h4>Contact</h4><p>No. 01, Mohideen Masjid Road,<br>Moor Street, Jaffna.</p><p style="margin-top:12px">+94 77 77 58 067<br>+94 77 44 58 582</p></div></div><div class="container footer-bottom"><span>© 2026 Genesis Academy. All Rights Reserved.</span><span>Learn. Lead. Transform.</span></div>`;
}

const whatsappButton=document.createElement('a');
whatsappButton.className='whatsapp-float';
whatsappButton.href='https://wa.me/94777758067?text=Hello%20Genesis%20Academy';
whatsappButton.target='_blank';
whatsappButton.rel='noopener';
whatsappButton.setAttribute('aria-label','Chat with Genesis Academy on WhatsApp');
whatsappButton.title='Chat on WhatsApp';
whatsappButton.innerHTML='<svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle cx="16" cy="16" r="14"></circle><path d="M11.6 9.8c.4-.5 1-.6 1.5-.2l1.8 1.5c.5.4.6 1.1.3 1.6l-.8 1.1c.8 1.6 2.1 2.9 3.7 3.7l1.1-.8c.5-.4 1.2-.3 1.6.2l1.5 1.8c.4.5.3 1.2-.2 1.6l-1 .8c-.7.5-1.5.7-2.3.4-4.8-1.5-8.1-4.8-9.6-9.6-.3-.8-.1-1.6.4-2.3l.8-1z"></path></svg><span class="whatsapp-label">Chat with us</span><i aria-hidden="true"></i>';
document.body.appendChild(whatsappButton);

const addToolOrbit=(parent, className)=>{
 const orbit=document.createElement('div');
 orbit.className=className;
 orbit.setAttribute('aria-hidden','true');
 orbit.innerHTML='<span aria-label="Coding">&lt;/&gt;</span><span aria-label="Artificial intelligence">✦</span><span aria-label="Robotics">⚙</span><span aria-label="Cloud technology">☁</span>';
 parent.appendChild(orbit);
};
document.querySelectorAll('.hero-visual').forEach(heroVisual=>addToolOrbit(heroVisual,'tool-orbit'));
document.querySelectorAll('.page-hero .container').forEach(heroContainer=>{
 const wave=document.createElement('div');
 wave.className='page-tool-wave';
 wave.setAttribute('aria-hidden','true');
 wave.innerHTML='<i class="wave-line wave-line-one"></i><i class="wave-line wave-line-two"></i><span aria-label="Coding">&lt;/&gt;</span><span aria-label="Artificial intelligence">✦</span><span aria-label="Robotics">⚙</span><span aria-label="Cloud technology">☁</span><span aria-label="Learning">★</span><span aria-label="Digital skills">◇</span><span aria-label="Innovation">+</span><span aria-label="Knowledge">∞</span>';
 heroContainer.appendChild(wave);
});

const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const counters=document.querySelectorAll('[data-target]');
const animateCounter=(counter)=>{
 const target=Number(counter.dataset.target);
 const suffix=counter.dataset.suffix||'';
 if(reduceMotion){counter.textContent=target+suffix;return;}
 const duration=1200;
 const start=performance.now();
 const update=(now)=>{
  const progress=Math.min((now-start)/duration,1);
  const eased=1-Math.pow(1-progress,3);
  counter.textContent=Math.round(target*eased)+suffix;
  if(progress<1)requestAnimationFrame(update);
 };
 requestAnimationFrame(update);
};
const counterObserver=new IntersectionObserver((entries)=>entries.forEach(entry=>{
 if(entry.isIntersecting){animateCounter(entry.target);counterObserver.unobserve(entry.target);}
}),{threshold:.6});
counters.forEach(counter=>counterObserver.observe(counter));

const tabs=document.querySelectorAll('.tab');
const programCards=document.querySelectorAll('[data-category]');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');const cat=tab.dataset.filter;programCards.forEach(card=>{card.style.display=(cat==='all'||card.dataset.category===cat)?'block':'none';})}));

const form=document.querySelector('#contactForm');
form?.addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('#formStatus');status.textContent='Thank you! Your message has been prepared successfully.';status.style.color='#1264e8';form.reset();});

/* motion preference + touch detection guard */
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isFinePointer=window.matchMedia('(hover:hover) and (pointer:fine)').matches;

/* hero mouse parallax: blobs, rings, sparkles drift + hero image tilt */
if(!reduceMotion && isFinePointer){
 const heroSection=document.querySelector('.hero');
 if(heroSection){
  const blobs=heroSection.querySelectorAll('.blob,.ring-deco,.spark');
  const visual=heroSection.querySelector('.hero-visual');
  heroSection.addEventListener('mousemove',(e)=>{
   const r=heroSection.getBoundingClientRect();
   const px=(e.clientX-r.left)/r.width-.5;
   const py=(e.clientY-r.top)/r.height-.5;
   blobs.forEach((el,i)=>{
    const depth=(i%3+1)*10;
    el.style.transform=`translate(${px*depth}px,${py*depth}px)`;
   });
   if(visual){
    const rotX=(py*-6).toFixed(2);
    const rotY=(px*8).toFixed(2);
    visual.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg)`;
   }
  });
  heroSection.addEventListener('mouseleave',()=>{
   if(visual)visual.style.transform='rotateX(0) rotateY(0)';
  });
 }

 /* subtle 3D tilt on cards */
 const tiltEls=document.querySelectorAll('.card,.why-card,.person,.partner');
 tiltEls.forEach(el=>{
  el.addEventListener('mousemove',(e)=>{
   const r=el.getBoundingClientRect();
   const px=(e.clientX-r.left)/r.width-.5;
   const py=(e.clientY-r.top)/r.height-.5;
   el.style.transform=`perspective(800px) translateY(-6px) rotateX(${(py*-5).toFixed(2)}deg) rotateY(${(px*5).toFixed(2)}deg)`;
  });
  el.addEventListener('mouseleave',()=>{el.style.transform='';});
 });
}
