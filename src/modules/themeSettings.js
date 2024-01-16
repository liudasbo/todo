import { saveThemeToLocalStorage } from "./localStorage";

const themeButton = document.querySelector('#themeBtn');
themeButton.addEventListener('click', themeToggle);

function themeToggle() {
    const root = document.documentElement;
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        root.classList.remove('dark');
        saveThemeToLocalStorage('light');
        themeButton.textContent = 'dark_mode'
    } else {
        root.classList.add('dark');
        saveThemeToLocalStorage('dark');
        themeButton.textContent = 'light_mode'
    }
}

function loadTheme() {
    const root = document.documentElement;
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
}

loadTheme();

const closeMenuButton = document.querySelector('#closeMenuBtn');
closeMenuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
        closeMenuButton.textContent = 'close';
    } else {
        menu.classList.add('hide');
        closeMenuButton.textContent = 'menu';
    }
}

// change menu button styles
function updateMenuBtnStyle() {
    const menuButtons = document.querySelectorAll('.menu ul li');
    let lastButton = menuButtons[0];

    menuButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (lastButton) {
                lastButton.classList.remove('active');
            }
            button.classList.add('active');
            lastButton = button;
        })
    })
}

updateMenuBtnStyle();
