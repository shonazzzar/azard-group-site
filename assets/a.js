const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
if(location.search.includes('static'))document.querySelectorAll('.rv').forEach(x=>x.classList.add('in'));
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.tab,.pane').forEach(x=>x.classList.remove('on'));t.classList.add('on');document.getElementById(t.dataset.p).classList.add('on')});
document.querySelectorAll('form').forEach(f=>f.onsubmit=e=>{e.preventDefault();f.querySelector('.ok').style.display='block';f.reset()});
document.querySelectorAll('.burg').forEach(b=>b.onclick=()=>{const n=b.closest('nav');n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))});
document.querySelectorAll('nav .nl a').forEach(a=>a.addEventListener('click',()=>a.closest('nav').classList.remove('open')));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&innerWidth>1000){const st=document.querySelector('.stage');if(st){let t=0;addEventListener('scroll',()=>{if(t)return;t=requestAnimationFrame(()=>{t=0;const y=Math.min(scrollY,900);st.style.transform=`translate3d(0,${y*-.06}px,0)`})},{passive:true})}}
