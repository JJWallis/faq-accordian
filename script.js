'use strict'

const links = document.getElementsByTagName('a');
const article = document.querySelector('article');

function appendArrowIcons() {
    const arrow = document.createElement('img');
    arrow.src = '/images/icon-arrow-down.svg';
    arrow.alt = 'arrow-image';

    for (let i = 0; i < links.length; i++) {
        links[i].appendChild(arrow);
    }
    return arrow;
}

const arrow = appendArrowIcons();

article.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const link = e.target;
        const nextSibling = link.nextElementSibling;
        link.classList.toggle('bold');
        nextSibling.classList.toggle('hidden');
        link.classList.toggle('seperator');
        nextSibling.classList.toggle('seperator');
        if (!nextSibling.classList.contains('hidden')) {
            link.style.paddingBottom = '10px';
        } else {
            link.style.paddingBottom = '20px';
        }
        arrow.classList.toggle('arrow');
    }
});

// positioning + number