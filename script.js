'use strict'

const links = document.getElementsByTagName('a')
const article = document.querySelector('article')

function appendArrowIcons() {
   for (let i = 0; i < links.length; i++) {
      const arrow = document.createElement('img')
      arrow.src = '/images/icon-arrow-down.svg'
      arrow.alt = 'arrow-image'
      arrow.className = 'arrow'
      links[i].appendChild(arrow)
   }
}

appendArrowIcons()

article.addEventListener('click', (e) => {
   if (e.target.tagName === 'A') {
      const link = e.target
      const linkId = link.getAttribute('id')
      const nextSibling = link.nextElementSibling
      const arrow = document.querySelector(`#${linkId} img`)
      link.classList.toggle('bold')
      nextSibling.classList.toggle('hidden')
      link.classList.toggle('seperator')
      nextSibling.classList.toggle('seperator')
      if (!nextSibling.classList.contains('hidden')) {
         link.style.paddingBottom = '10px'
      } else {
         link.style.paddingBottom = '20px'
      }
      if (!arrow.classList.contains('invert')) {
         arrow.classList.add('invert')
      } else {
         arrow.classList.remove('invert')
      }
   }
})
