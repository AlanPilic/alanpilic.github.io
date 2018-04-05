function menuDropDown() {

    var menu = document.querySelector(".menu");

    menu.classList.toggle('menu-opened');

    var menuList = document.querySelector(".menu-list");

    menuList.classList.toggle('list-opened');

    var listItems = document.querySelectorAll('li');

    var counter = 0;

    for(counter; counter < listItems.length; counter++){
        listItems[counter].classList.toggle('list-transform');
    }



}

document.getElementById("nav-icon").addEventListener("click", menuDropDown);