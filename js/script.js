function playMusic(){

document.getElementById("music").play();

}

function createHeart(){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="0";

heart.style.fontSize="25px";

heart.style.animation="float 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,500);

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-100vh);

opacity:0;

}

}

`;

document.head.appendChild(style);