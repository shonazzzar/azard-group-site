const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.tab,.pane').forEach(x=>x.classList.remove('on'));t.classList.add('on');document.getElementById(t.dataset.p).classList.add('on')});
document.querySelectorAll('form').forEach(f=>f.onsubmit=e=>{e.preventDefault();f.querySelector('.ok').style.display='block';f.reset()});
if(new URLSearchParams(location.search).has('static'))document.querySelectorAll('.rv').forEach(x=>x.classList.add('in'));
