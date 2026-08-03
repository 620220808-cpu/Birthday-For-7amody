// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        if (loading) {
            loading.style.display = "none";
        }

    }, 3000);

});

// ===========================
// Elements
// ===========================

const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const music = document.getElementById("music");

// ===========================
// Start Button
// ===========================

if (startBtn) {

    startBtn.addEventListener("click", () => {

        if (music) {
            music.play().catch(() => {});
        }

        const road = document.getElementById("roadSection");

        if (road) {

            road.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

// ===========================
// Restart Button
// ===========================

if (restartBtn) {

    restartBtn.addEventListener("click", () => {

        if (music) {

            music.pause();

            music.currentTime = 0;

        }

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
// ===========================
// Create Stars
// ===========================

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

// ===========================
// Show Boards
// ===========================

const boards = document.querySelectorAll(".board");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.5

});

boards.forEach(board => observer.observe(board));
// ===========================
// Floating Hearts
// ===========================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

// إنشاء قلب كل ثانية ونصف
setInterval(createHeart, 1500);

// ===========================
// Typewriter Effect
// ===========================

const finalTitle = document.querySelector(".finalBox h2");

if (finalTitle) {

    const text = finalTitle.textContent;

    finalTitle.textContent = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            finalTitle.textContent += text.charAt(i);

            i++;

            setTimeout(typeWriter, 70);

        }

    }

    const typingObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                typeWriter();
                typingObserver.disconnect();

            }

        });

    });

    typingObserver.observe(finalTitle);

}

console.log("For Mo7amed ❤️ Loaded Successfully");
