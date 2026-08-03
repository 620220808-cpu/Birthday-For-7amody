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
// Boards
// ===========================

const boards = document.querySelectorAll(".board");

let currentBoard = 0;

function showBoard() {

    if (currentBoard >= boards.length) return;

    boards[currentBoard].classList.add("show");

    setTimeout(() => {

        boards[currentBoard].classList.remove("show");

        currentBoard++;

        if (currentBoard < boards.length) {

            setTimeout(showBoard, 1000);

        }

    }, 6000);

}

// ===========================
// Start Button
// ===========================

if (startBtn) {

    startBtn.addEventListener("click", () => {

        startBtn.style.display = "none";

        if (music) {

            music.play().catch(() => {});

        }

        const road = document.getElementById("roadSection");

        if (road) {

            road.scrollIntoView({

                behavior: "smooth"

            });

        }

        setTimeout(showBoard, 1500);

    });

}

// ===========================
// Restart
// ===========================

if (restartBtn) {

    restartBtn.addEventListener("click", () => {

        location.reload();

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

    }, {

        threshold: 0.5

    });

    typingObserver.observe(finalTitle);

}

console.log("For Mo7amed ❤️ Loaded Successfully");
