# resources

https://www.youtube.com/watch?v=lUaw-AA9HnA&ab_channel=KevinPowell - demostrating proper use case for positioning (not using it for something we shouldn't)

# proud

 <!-- if (!arrow.classList.contains('invert')) {
            arrow.classList.add('invert');
        } else {
            arrow.classList.remove('invert');
        } - first time add + removing class based off of event | -->

<!-- const arrow = document.querySelector(`#${linkId} img`); --> - 1st time dynamicalyl selecting an el based off of a var (wasn't thinking of using interpolation here in this syntax - drums into you idea of doing this wherever a str is required)

###### TODO

HTML:

Google fonts <link> - connecting to their API (even though don't know technical details on what that entails)

Button wrapper for questions - accessiblity for free (even though doesn't register as valid in W3 validator) | heading + arrow as children + p question under button instead

Alt tags - need to be more meaningful | describe what's going on in img - not that it is an img

Empty DIV - create space behind SVGS (1st flex-child) | height for column view (collapsed as no content)

Camel case ids - don't do next time (cross language)

CSS:

positioning primary SVGS | lots of research on responsive design with positioning - because of all the bugs (alignment went off all time as viewport shrank) | difference between fluid + fixed unit values (% would cause SVG to move with container + viewport but fixed size in px so it wouldn't scale unnecessarily - before always thought about imgs in a fluid manner with max-width: 100%;)

Max-height + overflow: scroll on questions container vs max-height on parent wrapper (vs fluid + constantly growing container - stretched if didn't handle) | overflow on body - hide scrollbars

Spacing between questions in DOM + on answers by JS

JS:

use strict - prevent basic logical errors (JS has no types by default - want to be as strict as possible)

Appending arrows via JS on load vs hard-coded in DOM (HTML) | dynamic + cleaner HTML - however space-between flex layout requires that 2nd child to be present (caused layout bug) | solution - <i> tag with pseudo el attatched with arrow img as content (another way of showing) | still good practice for building els in JS + thinking dynamically (loop to append)

tagName within eventlistener to listen for links being clicked (good for future content but bad specificity) - use className in future | good practice in traversing DOM on event handler fire - classList() vs style obj (used both to compare + contrast syntax differences - no str value, less dot notation) | bulky conditionals - looking forward to other ways of writing logic (lots of parenthesis)
