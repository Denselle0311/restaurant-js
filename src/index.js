import Contact from "./pages/contact.js";
import Home from "./pages/home.js";
import Menu from "./pages/menu.js";
import "./styles.css";

const contentContainer = document.querySelector('.content');
const navContainer = document.querySelector('.nav');

navContainer?.addEventListener('click', handleNav)

function handleNav(event) {
    if(event.target.type != 'submit') return;

    const name = event.target.id.split('-')[0];
    let res;

    switch(name) {
        case 'home': 
            res = Home();
            break;
        case 'menu': 
            res = Menu();
            break;
        case 'contact': 
            res = Contact();
            break;
        default:
            res = null;
    }
    updateContent(res);
}

export function updateContent(selectedNav) {
    contentContainer.innerHTML = '';
    contentContainer?.append(selectedNav);
}

export function setActiveNav(target) {
    const navBtns = document.querySelectorAll(`.nav-btn`);

    navBtns.forEach(nav => nav.id.includes(target) 
    ? nav?.classList.add('active')
    : nav.classList.remove('active'));
}

document.addEventListener('DOMContentLoaded', ()=> updateContent(Home()));
