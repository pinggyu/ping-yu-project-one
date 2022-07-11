/* ===============================================
 * Gallery Carousel
 * ==============================================*/

/* ===============================================
* Form Submission 
* - success message upon submit
* ==============================================*/

const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const comment = document.getElementById('comment');
const contactForm = document.getElementById('contact-form');
const statusBox = document.getElementById('status');

if (contactForm){
    contactForm.addEventListener('submit', handleContact);
}

function handleContact(e) {
    e.preventDefault();

    // print success message
    statusBox.className = 'status success';

    // reset the form inputs
    username.value = "";
    email.value = "";
    message.value = "";
}

/* ===============================================
* Comment Submission 
* - success message upon submit
* ==============================================*/

const commentForm = document.getElementById('comment-form');

if (commentForm){
    commentForm.addEventListener('submit', handleComment);
}

function handleComment(e) {
    e.preventDefault();

console.log(statusBox);

    // print success message
    statusBox.className = 'status success';

    // reset the form inputs
    username.value = "";
    email.value = "";
    comment.value = "";
}
