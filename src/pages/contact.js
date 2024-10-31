import { setActiveNav } from "..";
import fakeMapUrl from '../images/fake-map.png';

export default function() {
    const container = document.createElement('div');
    container.classList.add('contact-container');

    const contact = document.createElement('p');
    contact.textContent = '📞 123 456 789';

    const address = document.createElement('p');
    address.textContent = '📍 314 Quezon Blvd, Quiapo, Manila, 1001 Metro Manila';

    const fakeMap = document.createElement('img');
    fakeMap.src = fakeMapUrl;

    setActiveNav('contact');

    container.append(
        contact,
        address,
        fakeMap
    );
    
    return container;
}