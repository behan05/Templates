const navbar = document.querySelector('.navbar');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

function menuOpen() {
    navbar.style.display = "block"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
}

function closeOpen() {
    navbar.style.display = "none"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
}