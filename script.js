let button = document.getElementById("clean");

let dust = document.getElementById("dust");

let progress = document.getElementById("progress");

let percent = document.getElementById("percent");

let message = document.getElementById("message");


let value = 0;


button.onclick = function(){


let cleaning = setInterval(function(){


value += 5;


progress.style.width = value + "%";


percent.innerHTML = value + "%";


dust.style.opacity = 1 - value/100;



if(value >= 100){

clearInterval(cleaning);

document.querySelector(".car").classList.add("shine");

message.style.display="block";

button.style.display="none";

confetti();

}


},200);



}



function confetti(){


for(let i=0;i<80;i++){


let star=document.createElement("div");


star.style.position="fixed";

star.style.width="10px";

star.style.height="10px";

star.style.left=Math.random()*100+"vw";

star.style.top="-20px";

star.style.background=
"rgb("+Math.random()*255+
","+Math.random()*255+
","+Math.random()*255+")";


star.style.animation=
"fall 3s linear";


document.body.appendChild(star);


}


}
