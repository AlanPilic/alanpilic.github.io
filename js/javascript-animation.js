function toggleLeft() {

    var menu = document.querySelector(".left-bar");

    menu.classList.toggle('appear-left');

}

document.querySelector(".left-click-icon").addEventListener("click", toggleLeft);



function toggleRight() {

    var menu = document.querySelector(".right-bar");

    menu.classList.toggle('appear-right');

}

document.querySelector(".right-click-icon").addEventListener("click", toggleRight);
