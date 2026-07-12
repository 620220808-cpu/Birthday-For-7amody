let progress = 0;

const bar = document.getElementById("bar");
const cleaned = document.getElementById("cleaned");
const percent = document.getElementById("percent");
const finish = document.getElementById("finish");
const popup = document.getElementById("popup");
const car = document.getElementById("car");

const dust = document.getElementById("dust");
const ctx = dust.getContext("2d");

function resizeCanvas() {
    dust.width = car.clientWidth;
    dust.height = car.clientHeight;

    ctx.fillStyle = "#5b5148";
    ctx.fillRect(0, 0, dust.width, dust.height);

    for (let i = 0; i < 2500; i++) {
        ctx.fillStyle = "rgba(80,70,60,.35)";
        ctx.beginPath();
        ctx.arc(
            Math.random() * dust.width,
            Math.random() * dust.height,
            Math.random() * 3,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
}

window.onload = resizeCanvas;
window.onresize = resizeCanvas;

let drawing = false;

function scratch(x, y) {

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 35, 0, Math.PI * 2);
    ctx.fill();

    progress += 0.4;

    if (progress > 100)
        progress = 100;

    bar.style.width = progress + "%";

    cleaned.innerHTML = Math.floor(progress) + "%";

    percent.innerHTML = Math.floor(progress) + "%";
}

dust.addEventListener("mousedown", () => drawing = true);

window.addEventListener("mouseup", () => drawing = false);

dust.addEventListener("mousemove", e => {

    if (!drawing) return;

    const rect = dust.getBoundingClientRect();

    scratch(
        e.clientX - rect.left,
        e.clientY - rect.top
    );

});

dust.addEventListener("touchmove", e => {

    const rect = dust.getBoundingClientRect();

    scratch(
        e.touches[0].clientX - rect.left,
        e.touches[0].clientY - rect.top
    );

});

finish.onclick = () => {

    if (progress < 100) {

        alert("امسح العربية كلها الأول 🚗");

        return;

    }

    popup.classList.add("show");

    confetti({

        particleCount:250,

        spread:180,

        origin:{y:.6}

    });

}

function closePopup(){

    popup.classList.remove("show");

}
