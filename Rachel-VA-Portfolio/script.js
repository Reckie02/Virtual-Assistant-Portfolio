// Nav scroll
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>40);
});

// Hamburger
document.getElementById('hamburger').addEventListener('click',()=>{
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile(){document.getElementById('mobileMenu').classList.remove('open');}

// Reveal on scroll
const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
},{threshold:0.12});
reveals.forEach(r=>io.observe(r));

// Contact form
function submitForm(){
  const n=document.getElementById('fname').value.trim();
  const e=document.getElementById('femail').value.trim();
  const m=document.getElementById('fmsg').value.trim();
  if(!n||!e||!m){alert('Please fill in all fields.');return;}
  const t=document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),4000);
  document.getElementById('fname').value='';
  document.getElementById('femail').value='';
  document.getElementById('fmsg').value='';
}

// Pulse animation
const style=document.createElement('style');
style.textContent='@keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.6;transform:scale(1.3);}}';
document.head.appendChild(style);