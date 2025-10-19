document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{
  const visible=nav.style.display==='flex';
  nav.style.display=visible?'none':'flex';
});