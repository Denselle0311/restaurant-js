import { setActiveNav } from "..";
import bigChickenTinola from '../images/big-chicken-tinola-bowl.jpg';
import crispyPata from '../images/crispy-pata.jpg';
import sinigangNaBangus from '../images/sinigang-na-bangus.jpg';

export default function() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const dish1 = createCard({
        imgUrl: bigChickenTinola,
        title: 'Chiken Tinola',
        desc: 'Tinola is a traditional Filipino comfort food that usually consists of broth, chicken, leafy greens, papaya, and ginger.'
    });

    const dish2 = createCard({
        imgUrl: crispyPata,
        title: 'Crispy Pata',
        desc: 'Crispy pata is a Filipino dish consisting of deep fried pig trotters or knuckles served with a soy-vinegar dip.'
    });

    const dish3 = createCard({
        imgUrl: sinigangNaBangus,
        title: 'Sinigang Na Bangus',
        desc: 'Sinigang na Bangus is a Filipino soup made with fresh bangus (milkfish) cooked in tamarind broth with a medley of vegetables such as okra, string beans, eggplant, radish, and kangkong.'
    });

    setActiveNav('menu');

    container.append(
        dish1,
        dish2,
        dish3
    );

    return container;
}

function createCard(food) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = food.imgUrl;

    const content = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = food.title;

    const description = document.createElement('p');
    description.textContent = food.desc;

    content.append(
        title,
        description
    );

    card.append(
        img,
        content
    );

    return card;
}