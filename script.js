// ==========================
// LOADING
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        if (loading) {

            loading.style.display = "none";

        }

    },3000);

});

// ==========================
// ELEMENTS
// ==========================

const startBtn=document.getElementById("start");
const restartBtn=document.getElementById("restart");
const music=document.getElementById("music");

const road=document.getElementById("roadSection");

// ==========================
// START
// ==========================

if(startBtn){

startBtn.addEventListener("click",()=>{

    startBtn.style.display="none";

    if(music){

        music.play().catch(()=>{});

    }

    road.scrollIntoView({

        behavior:"smooth"

    });

    setTimeout(showBoard,1500);

});

}
// ==========================
// STARS
// ==========================

const stars=document.getElementById("stars");

if(stars){

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*2+"s";

stars.appendChild(star);

}

}

// ==========================
// ROAD SIGNS
// ==========================

const boards=document.querySelectorAll(".board");

let currentBoard=0;

function showBoard(){

if(currentBoard>=boards.length){

return;

}

boards[currentBoard].classList.add("show");

setTimeout(()=>{

boards[currentBoard].classList.remove("show");

currentBoard++;

setTimeout(showBoard,800);

},5000);

}
// ==========================
// HEARTS
// ==========================

const hearts=document.getElementById("hearts");

function createHeart(){

if(!hearts) return;

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,1800);

// ==========================
// RESTART
// ==========================

if(restartBtn){

restartBtn.addEventListener("click",()=>{

location.reload();

});

}

console.log("For Mo7amed ❤️");
