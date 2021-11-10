# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam) challenge on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for the component depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./Screenshot.png)

### Links

-  Solution URL:
-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Flexbox
-  Mobile-first workflow
-  Vanilla JS

### What I learned

```html
<button>
   <a href="#id" class="seperator" id="linkOne"
      >How many team members can I invite?</a
   >
   <p class="hidden">
      You can invite up to 2 additional users on the Free plan. There is no
      limit on team members for the Premium plan.
   </p>
</button>
```

Upon research into building accessible accordians, I learned that a <button> is a great wrapper element for housing the question and dynamically revealed answer, since they provide so much built-in accessibility for free. Interestingly the W3 HTML validator highlights it as invalid HTML to have child paragraphs (or headings for example) inside a button, yet it would be invalid to use a <a> since we're not navigating to an external page.

```css
.empty-div {
   background: url('/images/illustration-woman-online-desktop.svg') no-repeat
      300% 10% / 110%;
}

.mobile-img {
   display: inline;
   width: 72%;
   position: absolute;
   top: -110px;
   left: 10%;
}
```

This was my first time controlling an SVG as a background image, as up until this point I had only worked with both png or jpg formats. Controlling the size/scalability and positioning as the viewport grew wider quickly became the hardest aspect to control. Having a fluid horizontal position allowed the image to respond to viewport changes, yet in the future I will practice using fixed px units to see what effect that may have on controlling the layout. Ultimately since these issues were happening with my positioned SVGs along the top of the card, my research into 'responsive positioning' showed how difficult that layout technique can be to handle responsively, and that we mustn't use it in places it's not designed for.

```js
if (!arrow.classList.contains('invert')) {
   arrow.classList.add('invert')
} else {
   arrow.classList.remove('invert')
}
```

The classList object in Javascript provides a much cleaner syntax for controlling classes with the DOM vs the style object. In this project specifically, I learnt how to add and remove the 'invert' class for my arrows based off a click event on the parent button.

```js
const arrow = document.querySelector(`#${linkId} img`)
```

I was really proud of this `querySelector` syntax above, because it was the first time I was able to dynamically select an element using interpolation in a part of the language I would not have thought to use it before. I had recently learned about using interpolation within these parts of the language, and here I successfully remembered how to do so on my own. Although unsuccessful, I did originally append the arrow icons via a loop in Javascript on load vs hardcoding them into the DOM, in an attempt to cleanup my HTML code and think more dynamically. The reason it didn't work is because of the required `space-between` layout for the questions and arrows, which required the arrows to be present in the HTML code for that pinning effect to occur.

### Continued development

My javascript code is still fairly bloated with bulky conditional statements and 'if' blocks, which I would like to address with other refactored methods of comparing two values to obtain one as a result.

Although the design problems faced within the CSS provided a great challenge, I'm still not at the level to feel confident in tackling them without breaking my current layout. I know with more practice I will start to gain more ideas about how to tackle layout challenges, since there is always multiple ways to achieve the same result in CSS.

Finally, I would like to learn more about other classList methods that are available in Javascript, such as the `toggle()` method. Even without knowing everything about what that method does, I can already see how I could refactor certain sections of code with it.

### Useful resources

-  [Position Absolute - Practical Examples](https://www.youtube.com/watch?v=lUaw-AA9HnA&ab_channel=KevinPowell) - demostrating proper use case for positioning (not using it for something we shouldn't)

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
