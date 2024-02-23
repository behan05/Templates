const icons_bar = document.querySelector('.icons_bar');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

function menuOpen() {
    icons_bar.style.display = "block"
    closeMenu.style.display = "block"
    openMenu.style.display = "none"
}

function closeOpen() {
    icons_bar.style.display = "none"
    closeMenu.style.display = "none"
    openMenu.style.display = "block"
}