'use strict'

const links = document.querySelectorAll('a');
const article = document.querySelector('article');
const wrapper = document.querySelector('.wrapper');


function appendArrowButtons () {
    const arrow = document.createElement('img');
    arrow.src = '/images/icon-arrow-down.svg';
    arrow.alt = 'arrow-image';
    arrow.className = 'arrow'
    arrow.style.marginLeft = '70px';

    for (let i = 0; i < links.length; i++) {
        links[i].appendChild(arrow);
    }
}

appendArrowButtons();


article.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        // e.target.style.fontWeight = 'bold';
    }
});