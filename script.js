// ==========================
// Loading
// ==========================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loading").style.display="none";

},3000);

});

// ==========================
// Elements
// ==========================

const start=document.getElementById("start");
const music=document.getElementById("music");
const restart=document.getElementById("restart");

// ==========================
// Start Journey
// ==========================

start.addEventListener("click",()=>{

music.play().catch(()=>{});

document.getElementById("roadSection").scrollIntoView({

behavior:"smooth"

});

setTimeout(showBoard,1500);

});

// ==========================
// Restart
// ==========================

restart.addEventListener("click",()=>{

location.reload();

});
// ==========================
// STARS
// ==========================

const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 200; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 2 + "s";

        stars.appendChild(star);

    }

}

// ==========================
// ROAD SIGNS
// ==========================

const boards = document.querySelectorAll(".board");

let current = 0;

function showBoard() {

    if (current >= boards.length) {

        return;

    }

    boards[current].classList.add("show");

    setTimeout(() => {

        boards[current].classList.remove("show");

        current++;

        setTimeout(showBoard,800);

    },5000);

}
// ==========================
// HEARTS
// ==========================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },6000);

}

setInterval(createHeart,1800);

console.log("For Mo7amed ❤️ Loaded");
