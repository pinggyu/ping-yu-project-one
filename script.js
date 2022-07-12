/* ===============================================
 * Gallery Carousel
 * - next step: make mobile responsive by only showing 1 carousel image preview (likely target the one with firstIndex)
 * ==============================================*/

// get URL and only execute gallery carousel code if on homepage - to refactor this with an init function
const url = new URL(window.location.href);

console.log(url);

if (url.pathname === '/') {

    // load images objects with their respective attributes into an array
    let images = [];
    images[0] = {
        src: "./assets/home-image-6.jpg",
        alt: "An empty road with looming fog"
    };
    images[1] = {
        src: "./assets/home-image-7.jpg",
        alt: "A bowl of uncut lemons with a plate of cut lemons"
    };
    images[2] = {
        src: "./assets/home-image-8.jpg",
        alt: "A wooden staircase with a trendy navy and gold wallpaper" 
    };
    images[3] = {
        src: "./assets/home-image-9.jpg",
        alt: "A single lotus flower"
    };

    const slideShow = document.getElementById('slideshow');
    const leftButton = document.getElementById('slideshow-btn-left');
    const rightButton = document.getElementById('slideshow-btn-right');

    let firstIndex = 0;

    // display images
    showImages();

    // LEFT BUTTON 
        // current 012, 123 
        // current 123, 230
        // current 230, 301
        // current 301, 012

    // RIGHT BUTTON
        // current 012, 301 
        // current 123, 012
        // current 230, 123
        // current 301, 230

  
    rightButton.addEventListener('click', (e) => {
        slideShow.innerHTML = "";

        if (firstIndex === 0) {
            firstIndex = 3;
        } else {
            firstIndex--;
        } 

        let imgIndex = firstIndex;

        for (let i = 0; i < 3; i++) {
            createImages(imgIndex);
            if (imgIndex === 3) {
                imgIndex = 0;
            } else {
                imgIndex++;
            }
        }
    });



    leftButton.addEventListener('click', (e) => {
        slideShow.innerHTML = "";
        if (firstIndex === 3) {
            firstIndex = 0;
        } else {
            firstIndex++;
        }

        let imgIndex = firstIndex;

        for (let i = 0; i < 3; i++) {
            createImages(imgIndex);
            if (imgIndex === 3) {
                imgIndex = 0;
            } else {
                imgIndex++;
            }
        }
    });
  

    function showImages(){
        for (let i = 0; i < 3; i++) {
            createImages(i);
        }
    }

    function createImages(index){
        let imgContainer = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src', images[index].src);
        img.setAttribute('alt', images[index].alt);
        imgContainer.appendChild(img);
        slideShow.appendChild(imgContainer);
    }

}
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

