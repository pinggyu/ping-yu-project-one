# Juno Project 1: Multi-page Site (Willow)

**View live site [here](https://willowblog.netlify.app/).**

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

## Technical Wins 

### 1. Fluid typography & improved responsiveness using clamp()
I used `clamp()` on some headers (e.g. H1 on main page) to allow the font size to grow and shrink based on the size of the user's viewport. `clamp()` sets a lower and upper bound in order to only target a range of values within those limits. The structure is as follows: `clamp(MIN, VAL, MAX)` where `MIN` is the minimum value, `MAX` is the maximum value and `VAL` is the desired value, set as a unit of viewport width in this case. This helps preserve the design while also allowing responsiveness without having to set different font sizes with media queries.

`clamp()` was also used on the width of certain elements in the header, specifically for the circle text image ("Daily Musings Of"), H1 and the portrait. This allows all elements of the header to shrink and grow with the screen size while preserving the design and without needing additional media queries at specific breakpoints.

One consideration with using `clamp()` is to ensure that the user can still scale the text to 200% of its original value as it would otherwise be a WCAG failure under [1.4.4 Resize text (AA)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F94.html). It can be tested by zooming across different device sizes, browsers and viewport sizes.

### 2. CSS only nagivation menu
I used CSS only to create a hamburger menu and slide-out navigation menu for smaller screen sizes. The hamburger menu was created with a `span` tag inside a `label` tag that is linked to a `checkbox input`. The 3 horizontal lines that form the hamburger menu are created using `span` and `span::before` and `span::after`. Those pseudo-elements allow content to be inserted without needing to be in HTML. When a user clicks on the menu and the checkbox is checked, the 3 lines rotate in a way that a "X" closing button is formed and the navigation menu slides out simultaneously. 

## Technical Challenges

### 1. Responsive box shadow effect
One of the main challenges of this design was the box shadow effect on the images in the blogpost section of the homepage. The design seems to intend for the shadows to extend across the whole width of the screen. 

I used `::after` to create a pseudo-element for the images. In order to have the shadow extend across the width of the page and maintain the design's responsiveness, I explored 2 options for the width of the pseudo-element:

- Setting `width = calc(50vw - 1rem)` with a `min-width = 100%` and `position = absolute` to fit the screen perfectly. However, the design breaks past a certain viewport width value as the shadow shrinks to 100% of the image too early and requires additional media queries to preserve the design on smaller and medium screens. 
- Setting width to a high value such as 200vw to overflow the viewport and then hide the white space caused by the overflow (e.g. using `html, body { overflow-x: hidden }`. Doing this enables the design to stay responsive down to 320px screens, however using the `overflow: hidden` property on the body can interfere with certain child element properties such as `position: sticky`. 

I opted for Option B) as it required the least amount of code (no additional media queries) and hiding the overflow works with this specific website design as it did not affect other core elements. 

### 2. Reducing media queries & SCSS nesting levels
Since I first built the website based on the desktop design, I noticed that there were several media queries that were simply overwriting desktop properties. I also ran into some issues where media queries were not applied due to specificity and had to change how I target specific elements by nesting SCSS selectors several levels deep. A better approach would be building the website from a mobile-first approach and using `min-width` media queries (instead of `max-width`) to add complexity in bigger screens, instead of reversing details in smaller screens. 