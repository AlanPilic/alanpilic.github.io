function toggleRightBar() {

    var menu = document.getElementById("middle-button");

    menu.classList.toggle('open');

    var rightBar = document.querySelector(".right-bar");

    rightBar.classList.toggle('rside-active');

    var wrapper = document.querySelector(".wrapper");

    wrapper.classList.toggle('hidden-active');

}

document.getElementById("middle-button").addEventListener("click", toggleRightBar);

function toggleLeftBar() {

    var menu = document.getElementById("right-bar-button");

    menu.classList.toggle('open');

    var leftBar = document.querySelector(".left-bar");

    leftBar.classList.toggle('lside-active');

    var wrapper = document.querySelector(".wrapper");

    wrapper.classList.toggle('hidden-active');

}

document.getElementById("right-bar-button").addEventListener("click", toggleLeftBar);