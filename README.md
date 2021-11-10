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

Button wrapper for questions - accessiblity for free (even though doesn't register as valid in W3 validator) | heading + arrow as children + p question under button instead | Camel case ids - don't do next time (cross language)

```css
.empty-div {
   background: url('/images/illustration-woman-online-desktop.svg') no-repeat
      300% 10% / 110%;
}
```

First time controlling a bg-img in SVG style

```css
.mobile-img {
   display: inline;
   width: 72%;
   position: absolute;
   top: -110px;
   left: 10%;
}
```

positioning primary SVGS | lots of research on responsive design with positioning - because of all the bugs (alignment went off all time as viewport shrank) | difference between fluid + fixed unit values (% would cause SVG to move with container + viewport but fixed size in px so it wouldn't scale unnecessarily - before always thought about imgs in a fluid manner with max-width: 100%;)

```css
.wrapper {
   flex-direction: column;
   min-height: auto;
}
```

Max-height + overflow: scroll on questions container vs max-height on parent wrapper (vs fluid + constantly growing container - stretched if didn't handle) | overflow on body - hide scrollbars

```js
if (!arrow.classList.contains('invert')) {
   arrow.classList.add('invert')
} else {
   arrow.classList.remove('invert')
}
```

first time add + removing class based off of event (vs style obj) | good practice in traversing DOM on event handler fire - classList() vs style obj (used both to compare + contrast syntax differences - no str value, less dot notation) |

```js
const arrow = document.querySelector(`#${linkId} img`)
```

1st time dynamicalyl selecting an el based off of a var (wasn't thinking of using interpolation here in this syntax - drums into you idea of doing this wherever a str is required) | Appending arrows via JS on load vs hard-coded in DOM (HTML) | dynamic + cleaner HTML - however space-between flex layout requires that 2nd child to be present (caused layout bug) | solution - <i> tag with pseudo el attatched with arrow img as content (another way of showing) | still good practice for building els in JS + thinking dynamically (loop to append)

### Continued development

bulky conditionals - looking forward to other ways of writing logic (lots of parenthesis)

Design solutions - sometimes responsive height is not desired

### Useful resources

-  [Position Absolute - Practical Examples](https://www.youtube.com/watch?v=lUaw-AA9HnA&ab_channel=KevinPowell) - demostrating proper use case for positioning (not using it for something we shouldn't)

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
