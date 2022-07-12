/* ===============================================
 * Gallery Carousel
 * ==============================================*/



/* ===============================================
* Form Submission 
* - email validation only as fields are already mandatory through the "required" attribute with html
* - success message upon submit
* ==============================================*/

const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const comment = document.getElementById('comment');
const contactForm = document.getElementById('contact-form');
const statusBox = document.getElementById('status');
const statusText = document.getElementById('statusText');

if (contactForm){
    contactForm.addEventListener('submit', handleContact);
}

function handleContact(e) {
    e.preventDefault();

    // email validation
    if(!isEmail(email.value)){
        statusText.textContent = `Invalid email. Please enter your email again.`;
        statusBox.className = 'status error';

    }else {

    // print success message
    statusBox.className = 'status success';

    // reset the form inputs
    username.value = "";
    email.value = "";
    message.value = "";
    }
}

// valid email checker using a regular expression (regex from: http://jsfiddle.net/ghvj4gy9/)
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/* ===============================================
* Comment Submission 
* - email validation only as fields are already mandatory through the "required" attribute with html
* - success message upon submit
* ==============================================*/

const commentForm = document.getElementById('comment-form');

if (commentForm){
    commentForm.addEventListener('submit', handleComment);
}

function handleComment(e) {
    e.preventDefault();

    // email validation

    if (!isEmail(email.value)) {
        statusText.textContent = `Invalid email. Please enter your email again.`;
        statusBox.className = 'status error';

    }else {

    // print success message
    statusBox.className = 'status success';

    // reset the form inputs
    username.value = "";
    email.value = "";
    comment.value = "";
    }
}

/* ===============================================
 * Side Navigation Menu
 * - fix bug where the nav does not close when about is clicked while on the homepage (index.js)
 * ==============================================*/

const about = document.getElementById('about-side-nav');
const sideNav = document.getElementById('slide-out-nav');

about.addEventListener('click', (e) => {
    sideNav.style.transform = "translateX(100%)";
});