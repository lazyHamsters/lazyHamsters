document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
    const btnToggle = document.getElementById('btnToggle');
    btnToggle.addEventListener('click', onBtnClick);
}

function onBtnClick () {
    const divMenu = document.querySelector('.nav__main-menu');
    if (divMenu) {
        divMenu.classList.toggle('nav__main-menu--active');
    }
}