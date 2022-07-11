/* ===============================================
 * Gallery Carousel
 * ==============================================*/

/* ===============================================
* Form Submission 
* - error handling/ form validation: name is a string, all fields that are required have been filled 
* - success message & clear form
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

    // let errorMsg = [];
    e.preventDefault();

    // if (username.value === '' || username.value == null){
    //     errorMsg.push(`Please enter your name.`);
    // }
    
    // if (email.value === '' || email.value == null){
    //     errorMsg.push(`Please enter a valid email.`);
    // }
    
    // if (message.value === '' || message.value == null) {
    //     errorMsg.push(`Please enter a message.`);
    // }
    
    // if (errorMsg.length > 0) {
    //     // prevent page from submitting if there's an error
    //     statusBox.innerText = errorMsg.join (` `);
    // } else {
    statusMsg = "Success! Your message has been sent.";
    statusBox.style.cssText = "color: #345231; padding-top: 1rem; text-align: center";
    statusBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${statusMsg}`;

    // reset the form inputs
    username.value = "";
    email.value = "";
    message.value = "";
    // }
}

/* ===============================================
* Comment Submission 
* - add a comment on the Blog page
* ==============================================*/

const commentForm = document.getElementById('comment-form');

if (commentForm){
    commentForm.addEventListener('submit', handleComment);
}

function handleComment(e) {
    e.preventDefault();

    statusMsg = "Success! Your comment has been sent for approval.";
    statusBox.style.cssText = "color: #345231; padding-top: 1rem; text-align: center";
    statusBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${statusMsg}`;

    // reset the form inputs
    username.value = "";
    email.value = "";
    comment.value = "";
}