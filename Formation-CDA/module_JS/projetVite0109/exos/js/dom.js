// function applyStyles(element) {
//     element.style.backgroundColor = `background-color: #4158D0`;
//     element.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
//     element.style.color = `white`;
//     element.style.width = '500px';
//     element.style.margin = 'auto';
//     element.style.padding = '2rem';
// }

// function createAndAppendElement(tag, text, parentElement) {
//     const element = document.createElement(tag);
//     element.innerText = text;
//     parentElement.append(element);
// }

// let divUser = document.querySelector('.userProfile');
// applyStyles(divUser);

// const imgTemplate = document.createElement('img');
// imgTemplate.src = userData.img;
// imgTemplate.className = 'img-fluid';
// divUser.append(imgTemplate);

// createAndAppendElement('h1', userData.name, divUser);
// createAndAppendElement('h2', userData.email, divUser);
// createAndAppendElement('h3', userData.age, divUser);
// createAndAppendElement('h4', userData.dob, divUser);
// createAndAppendElement('h5', userData.active, divUser);
// createAndAppendElement('h5', '44 rue du truc', divUser);

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

document.addEventListener('DOMContentLoaded', () => {
    const nomEntrepriseSpan = document.getElementById('nomEntreprise');
    const nomEntreprise = 'Site';
    nomEntrepriseSpan.textContent = nomEntreprise;
});

