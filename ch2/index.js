var title = document.getElementById("title");
title = document.querySelector("#title"); // 처음 태그의 모든 것을 가져온다. 

title.innerHTML = "Hi! FROM JS";
title.style.color = 'red';
document.title = "I own you now" // html파일 이름이 바뀜.

/*
const age = prompt("How old are you?"); // like alert

if(age > 18){
    console.log("You can");
} else {
    console.log("You can't")
}
*/

function handleResize(event) {
    // console.log("I have been resized")
    console.log(event); // event 객체가 호출된다. resize object를 자동으로 가져옴.
}

window.addEventListener("resize",handleResize); // listen to Event window size changing

const BASE_COLOR = "black";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor == BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter",handleClick);
}

init();

function handleOffline() {
    console.log("Turned to Offline");
}

function handleOnline() {
    console.log("Welcome Back");
}

window.addEventListener("offline", handleOffline); // offline이 되면 이벤트 발생f
window.addEventListener("online",handleOnline); // online이 되면 이벤트 발생 



