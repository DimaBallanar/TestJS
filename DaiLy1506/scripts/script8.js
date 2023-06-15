const button8=document.querySelector(".play");
const audio8=document.querySelector(".audio8");
let flag=false
button8.addEventListener("click", function(){
audio8.src="../music/INSTASAMKA - DADADA.mp3";
if(!flag){
    audio8.play();
    flag=true;
    button8.textContent="Pause";
}
else{
    // audio8.stop();
    audio8.pause();
    flag=false;
    button8.textContent="Play";
}

});