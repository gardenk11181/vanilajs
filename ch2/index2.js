const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    /*
    const hasClass = ti tle.classList.contains(CLICKED_CLASS);
    if(!hasClass) {
        // title.className = CLICKED_CLASS; 이처럼하면 이전 클래스는 사라짐. 
        title.classList.add(CLICKED_CLASS); // 따라서 클래스 리스트에 추가하는 방식으로 진행.
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
    */

    title.classList.toggle(CLICKED_CLASS); 
    // 위와 정확히 동일한 내용
}

function init() {
    title.addEventListener("click", handleClick);
}

init();