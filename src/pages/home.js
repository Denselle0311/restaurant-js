import { setActiveNav, updateContent } from '..';
import adobo from '../images/adobo.jpg';
import about from './contact';
import Menu from './menu';

export default function() {
    const container = document.createElement('div');
    container.classList.add('home-container');

    const hero = createHero();
    
    setActiveNav('home');
    
    container.append(hero);
    
    return container;
}

function createHero() {
    const hero = document.createElement('div');
    hero.classList.add('hero-section');

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Enjoy our fine Filipino Cuisine.';

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor purus vitae risus ultrices, vitae efficitur ligula accumsan. Maecenas ac mauris justo. Integer in dolor non sapien tincidunt convallis ut vitae est. Cras felis mi, sagittis varius euismod imperdiet, hendrerit ut orci. Proin luctus nulla at egestas fringilla. Phasellus libero elit, mattis a neque at, condimentum commodo eros. Fusce accumsan sem eget semper posuere.';

    const ctaBtn = document.createElement('button');
    ctaBtn.classList.add('cta-btn');
    ctaBtn.textContent = 'SEE ALL OUR CUISINE';

    ctaBtn.addEventListener('click', ()=> updateContent(Menu()));

    heroContent.append(h1, p, ctaBtn);

    const dishImg = document.createElement('div');
    dishImg.classList.add('dish-img');
    dishImg.style.backgroundImage = `url(${adobo})`;

    hero.append(heroContent, dishImg);

    return hero;
}