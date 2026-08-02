// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});

// Music
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    music.play();

    document.querySelector(".carSection").scrollIntoView({
        behavior: "smooth"
    });

});

// Show Messages While Scrolling
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            card.classList.add("show");

        }

    });

});

// Restart Button
document.getElementById("restart").addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Hearts Animation
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 5s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.top = "-50px";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 700);

// Stars Animation
setInterval(() => {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.fontSize = "14px";
    star.style.opacity = "0";
    star.style.transition = "1s";
    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    setTimeout(() => {
        star.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        star.style.opacity = "0";
    }, 1500);

    setTimeout(() => {
        star.remove();
    }, 2500);

}, 500);
// ===============================
// Create Night Stars
// ===============================

const starsContainer = document.getElementById("stars");

for(let i=0;i<150;i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100+"%";
    star.style.top = Math.random()*100+"%";

    const size = Math.random()*3+1;

    star.style.width = size+"px";
    star.style.height = size+"px";

    star.style.animationDelay = Math.random()*3+"s";

    starsContainer.appendChild(star);

}

// ===============================
// Floating Hearts
// ===============================

const hearts = document.getElementById("hearts");

setInterval(()=>{

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20 + Math.random()*25)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

},700);

// ===============================
// Car Engine Effect
// ===============================

const car = document.getElementById("car");

setInterval(()=>{

    car.style.transform = "translateX(-50%) translateY(-2px)";

    setTimeout(()=>{

        car.style.transform = "translateX(-50%) translateY(2px)";

    },120);

},240);

// ===============================
// Music
// ===============================

const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

startBtn.addEventListener("click",()=>{

    music.play();

    document.querySelector(".drive").scrollIntoView({

        behavior:"smooth"

    });

});
