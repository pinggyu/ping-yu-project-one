# Juno Project 1: Multi-page Site (Willow)

## Objective
To convert a given design into a multi-page, functional, responsive website and present technical wins/ challenges. 

## Project Requirements

- Site is responsive (down to 320px) and uses media queries
- Flexbox and a wrapper is used
- Sass variables are used
- Site is accessible (i.e. form labels are implemented properly, images have alt text etc.)
- Mobile view provides good user experience
- Files, folders and project repo follow a consisting naming convention (ie. kabob-case)
- Naming convention throughout HTML and CSS is consistent (ie. kabob-case) or follows a known pattern (ie. BEM)
- Project is organized using Sass partials (minimum 3)
- Project represents the provided design well
- Navigation should link to other pages made for the project
- Site is live on Netlify
- Project will be presented to discuss technical win(s) & technical challenge(s)

### Technical Wins 

**1. Fluid typography & improved responsiveness using clamp()**
I used `clamp()` on some headers (e.g. H1 on main page) to allow the font-size to grow and shrink based on the size of an user's viewport. `clamp()` sets a minimum and maximum bound in order to only target a range of values within a defined lower and upper limit. The structure is as follows clamp(MIN, VAL, MAX) where MIN is the lower bound, MAX is the upper bound and VAL is the desired value, set as a unit of viewport width in this case. This helps preserve the design while also allowing responsiveness without having to set font-sizes with media queries at specific breakpoints. The use of `clamp()` allows for more fluid typography and reduces the amount of code required (ie. less media queries). 

`clamp()` was also used on the width of certain elements in the hero header, specifically for the circle text img ("Daily Musings Of") and the portrait. This allows all elements of the header to shrink down to a fixed minimum point or to grow to a fixed maximum point by setting a viewport width value as desired width using `clamp()`. This allows for better responsiveness in a single line of code for each element instead of additional media queries at different breakpoints. 

**2. CSS only nagivation menu**
I used CSS only to create a hamburger menu and slide-out full-screen navigation menu for smaller screen sizes. 

The hamburger menu was created with a `span` tag inside a label tag that is linked to a checkbox input. The 3 lines hamburger menu are created using `span` and `span::before` and `span::after`. Those pseudo-elements allow content to be inserted without needing to be in HTML. When a user clicks on the menu and the checkbox is checked, the 3 hamburger lines rotate in a way that a "X" closing button is formed and the navigation menu slides out simultaneously. 

The full-screen slide out navigation menu is at first hidden from screen (base state) using `transform: translateX(100%)`. When the checkbox input is activated, the side navigation menu slides out using `transform: translateX(0%)` to bring it on screen. It occupies the full screen when visible by setting the position to fixed and top, left, right and bottom values to 0 (no distance from either sides). 

### Technical Challenges

**1. Responsive box shadow effect**
One of the main challenges of this design was the box shadow effect on the images in the blogpost section of the homepage. The design seems to intend for the box shadow effect to extend across the whole width of the screen. 

I used ::after to create a pseudo-element for the images. In order to have the shadow extend across the page and maintain the design responsiveness as much as possible, I explored 2 options for the width of the pseudo-element:

A) Setting `width = calc(50vw - 1rem)` with a `min-width = 100%` and position absolute to fit the screen perfectly. However, the design breaks past a certain viewport width value as the shadow shrinks to 100% of the image too early and requires additional media queries to preserve the design on smaller and medium screens. 
B) Setting width to a value over 50vw to overflow the element and then hide the overflow (e.g. using `html, body { overflow-x:hidden }`. Doing this enables the design to stay responsive down to 320px screens, however using the `overflow: hidden` property on the body can interfere with other properties such as elements with `position: sticky`. For example, setting the navigation bar to `position: sticky` to keep the nav bar on top when a user scrolls will not work if a parent, such as body, has the `overflow: hidden` property.

I opted for Option B) as it required the least code (no additional media queries) and hiding the overflow works with this specific website design as it did not affect other core elements (assuming the nav bar being sticky is not a core feature). A better solution moving forward could perhaps be to use clamp() to set a minimum for the shadow (e.g. 100% of the image) and a maximum such as calc(50vw - 1rem) so that the shadow can perfectly fit the screen size without ever overflowing. 
