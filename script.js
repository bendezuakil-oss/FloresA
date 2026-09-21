const loader=document.getElementById("loader"),cover=document.getElementById("cover"),screen=document.getElementById("envScreen"),env=document.getElementById("env"),final=document.getElementById("final");
setTimeout(()=>loader.classList.add("hide"),1700);
document.getElementById("open").onclick=()=>{cover.style.display="none";screen.classList.add("active");scrollTo(0,0)};
env.onclick=()=>{if(env.classList.contains("open"))return;env.classList.add("open");setTimeout(()=>{screen.classList.remove("active");final.classList.add("active");scrollTo(0,0)},1250)};
document.getElementById("again").onclick=()=>{final.classList.remove("active");env.classList.remove("open");cover.style.display="block";scrollTo(0,0)};
const c=document.getElementById("particles"),x=c.getContext("2d");let a=[];
function size(){c.width=innerWidth*devicePixelRatio;c.height=innerHeight*devicePixelRatio;c.style.width=innerWidth+"px";c.style.height=innerHeight+"px";x.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}
size();onresize=size;
for(let i=0;i<28;i++)a.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.7+.4,s:Math.random()*.3+.08});
function draw(){x.clearRect(0,0,innerWidth,innerHeight);a.forEach(p=>{p.y-=p.s;if(p.y<0)p.y=innerHeight;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fillStyle="rgba(242,190,64,.16)";x.fill()});requestAnimationFrame(draw)}draw();