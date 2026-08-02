// ===============================
// LOADING
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

    }, 3000);

});

// ===============================
// ELEMENTS
// ===============================

const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const music = document.getElementById("music");
const car = document.getElementById("car");

// ===============================
// START JOURNEY
// ===============================

startBtn.addEventListener("click", () => {

    // تشغيل الأغنية
    music.play();

    // النزول للطريق
    document.getElementById("roadSection").scrollIntoView({

        behavior: "smooth"

    });

    // تشغيل حركة العربية
    car.classList.add("start-drive");

});

// ===============================
// RESTART
// ===============================

restartBtn.addEventListener("click", () => {

    music.currentTime = 0;

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// STARS
// ===============================

const stars = document.getElementById("stars");

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
// ===============================
// Show Road Signs
// ===============================

const boards = document.querySelectorAll(".board");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.5
});

boards.forEach(board=>observer.observe(board));


// ===============================
// Floating Hearts
// ===============================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}


// ===============================
// Final Hearts
// ===============================

const destination = document.getElementById("destination");

const finalObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            for(let i=0;i<50;i++){

                setTimeout(createHeart,i*150);

            }

        }

    });

});

finalObserver.observe(destination);


// ===============================
// Typewriter Effect
// ===============================

const title = document.querySelector(".finalBox h2");

const originalText = title.innerHTML;

title.innerHTML = "";

let index = 0;

function typeWriter(){

    if(index < originalText.length){

        title.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeWriter,70);

    }

}

const typingObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            typeWriter();

        }

    });

});

typingObserver.observe(destination);


// ===============================
// Car Click ❤️
// ===============================

car.addEventListener("click",()=>{

    alert("❤️ وحشتني ❤️");

});
