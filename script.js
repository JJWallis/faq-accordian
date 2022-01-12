'use strict'

const links = document.getElementsByTagName('a')
const article = document.querySelector('article')

article.addEventListener('click', (e) => {
   if (e.target.tagName === 'A') {
      const link = e.target
      const nextSibling = link.nextElementSibling
      link.classList.toggle('bold')
      link.classList.toggle('active')
      nextSibling.classList.toggle('hidden')
      link.classList.toggle('seperator')
      nextSibling.classList.toggle('seperator')
      if (!nextSibling.classList.contains('hidden')) {
         link.style.paddingBottom = '10px'
      } else {
         link.style.paddingBottom = '20px'
      }
   }
})
