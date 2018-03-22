function toggleMenu() {

	var menu = document.querySelector(".mobile-nav-bar");

	menu.classList.toggle('appear');

}

document.querySelector(".menu-icon-bar").addEventListener("click", toggleMenu);