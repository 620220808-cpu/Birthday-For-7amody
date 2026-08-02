// ===================================
// LOADING
// ===================================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        if (loading) {

            loading.style.display = "none";

        }

    }, 3000);

});

// ===================================
// ELEMENTS
// ===================================

const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const music = document.getElementById("music");

const road = document.getElementById("roadSection");

// ===================================
// START
// ===================================

if(startBtn){

    startBtn.addEventListener("click",()=>{

        startBtn.style.display="none";

        if(music){

            music.play().catch(()=>{});

        }

        if(road){

            road.scrollIntoView({

                behavior:"smooth"

            });

        }

        setTimeout(showBoard,2000);

    });

}

// ===================================
// RESTART
// ===================================

if(restartBtn){

    restartBtn.addEventListener("click",()=>{

        if(music){

            music.pause();

            music.currentTime=0;

        }

        location.reload();

    });

}
// ===================================
// STARS
// ===================================

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

// ===================================
// ROAD SIGNS
// ===================================

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

        setTimeout(showBoard, 1000);

    }, 3000);

}
// ===================================
// FLOATING HEARTS
// ===================================

const hearts = document.getElementById("hearts");

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

setInterval(createHeart,1500);

// ===================================
// TYPEWRITER EFFECT
// ===================================

const finalText=document.querySelector(".finalBox h2");

if(finalText){

    const text=finalText.textContent;

    finalText.textContent="";

    let i=0;

    function type(){

        if(i<text.length){

            finalText.textContent+=text.charAt(i);

            i++;

            setTimeout(type,70);

        }

    }

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                type();

                observer.disconnect();

            }

        });

    });

    observer.observe(finalText);

}

console.log("Website Loaded Successfully ❤️");
