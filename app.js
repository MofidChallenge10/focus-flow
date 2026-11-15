const $=id=>document.getElementById(id);
let seconds=25*60, running=false, timer=null;
function paint(){ $("clock").textContent=String(Math.floor(seconds/60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0"); $("toggle").textContent=running?"Pause":"Start"; }
function stop(){running=false;clearInterval(timer);timer=null;paint();}
$("toggle").addEventListener("click",()=>{if(running){stop();return;}running=true;timer=setInterval(()=>{seconds=Math.max(0,seconds-1);paint();if(seconds===0){stop();$("mode").textContent="Session complete — take a break!";}},1000);paint();});
$("reset").addEventListener("click",()=>{stop();seconds=25*60;$("mode").textContent="Focus session";paint();});
let tasks=JSON.parse(localStorage.getItem("focus-flow-tasks")||"[]");
function render(){ $("tasks").replaceChildren();tasks.forEach((task,i)=>{const li=document.createElement("li");li.textContent=task;const b=document.createElement("button");b.textContent="Done";b.setAttribute("aria-label","Complete "+task);b.onclick=()=>{tasks.splice(i,1);save();};li.append(b);$("tasks").append(li);});}
function save(){localStorage.setItem("focus-flow-tasks",JSON.stringify(tasks));render();}
$("task-form").addEventListener("submit",e=>{e.preventDefault();const input=$("task-input");const value=input.value.trim();if(value){tasks.push(value);input.value="";save();}});
render();paint();
