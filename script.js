let button = document.getElementById("clean");

let dust = document.getElementById("dust");

let progress = document.getElementById("progress");

let percent = document.getElementById("percent");

let message = document.getElementById("message");

let car = document.querySelector(".car");


let value = 0;
let cleaning = false;



button.onclick = function(){


if(cleaning) return;

cleaning = true;


let timer = setInterval(function(){


value += 5;


progress.style.width = value + "%";


percent.innerHTML = value + "%";


// إزالة التراب تدريجياً

dust.style.opacity = 1 - value / 100;



if(value >= 100){


clearInterval(timer);


// إضافة لمعة للعربية

car.classList.add("shine");


// إظهار الرسالة

message.style.display = "block";


// إخفاء الزر

button.style.display = "none";


// تشغيل الكونفيتي

createConfetti();


}


},200);



}




function createConfetti(){


for(let i = 0; i < 100; i++){


let piece = document.createElement("div");


piece.className = "confetti";


piece.style.left =
Math.random() * 100 + "vw";


piece.style.top =
"-20px";


piece.style.background =
"rgb("
+ Math.random()*255 +
","
+ Math.random()*255 +
","
+ Math.random()*255 +
")";


piece.style.animationDuration =
(2 + Math.random()*3) + "s";



document.body.appendChild(piece);



}


}
