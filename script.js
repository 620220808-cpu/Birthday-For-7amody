// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

    }, 3000);

});

// ===========================
// Elements
// ===========================

const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");

if(restartBtn){
    restartBtn.addEventListener("click", () => {
        music.pause();
        music.currentTime = 0;

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}
const music = document.getElementById("music");

// ===========================
// Start Journey
// ===========================

startBtn.addEventListener("click", () => {

    // تشغيل الأغنية
    music.play().catch(() => {});

    // النزول للطريق
    document.getElementById("roadSection").scrollIntoView({
        behavior: "smooth"
    });

});

// ===========================
// Restart
// ===========================

restartBtn.addEventListener("click", () => {

    music.pause();
    music.currentTime = 0;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===========================
// Create Stars
// ===========================

const stars = document.getElementById("stars");

for(let i=0;i<200;i++){

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
// ===========================
// Show Boards One By One
// ===========================

const boards = document.querySelectorAll(".board");

let currentBoard = 0;

function showNextBoard(){

    if(currentBoard >= boards.length) return;

    boards[currentBoard].classList.add("show");

    setTimeout(()=>{

        boards[currentBoard].classList.remove("show");

        currentBoard++;

        showNextBoard();

    },3000);

}

startBtn.addEventListener("click",()=>{

    setTimeout(showNextBoard,2000);

});

// ===========================
// Floating Hearts
// ===========================

const hearts = document.getElementById("hearts");

function createHeart(){

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

// ===========================
// Final Hearts
// ===========================
const destination = document.getElementById("destination");

if(destination){
    finalObserver.observe(destination);
    typingObserver.observe(destination);
}

// ===========================
// Typewriter Effect
// ===========================

const title=document.querySelector(".finalBox h2");

const originalText=title.textContent;

title.textContent="";

let index=0;

function typeWriter(){

    if(index<originalText.length){

        title.textContent+=originalText.charAt(index);

        index++;

        setTimeout(typeWriter,70);

    }

}

const typingObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            typeWriter();

        }

    });

});

typingObserver.observe(destination);

// ===========================
// End
// ===========================

console.log("For Mo7amed ❤️ Loaded Successfully");
