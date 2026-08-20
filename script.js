const glow=document.getElementById('cursorGlow');
document.addEventListener('mousemove',e=>{
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
});
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width*100;
    const y=(e.clientY-r.top)/r.height*100;
    card.style.background=`radial-gradient(circle at ${x}% ${y}%, rgba(126,72,45,.35), transparent 42%), linear-gradient(145deg,rgba(62,33,23,.96),rgba(31,16,12,.97))`;
  });
  card.addEventListener('mouseleave',()=>card.style.background='');
});
