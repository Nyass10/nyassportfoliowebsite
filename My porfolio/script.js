/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/* remove toggle icon and navbar when clicked navbar link scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
     distance: '80px',
     duration: 6000,
     delay: 200
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, services-container, .portfolio-box, .portfolio, .services, .skills, .contact form, .about-content',
{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'})

function myFunction() {
    var dots1 =
    document.getElementById("dots1");
    var moreText =
    document.getElementById("more");
    var btnText =
    document.getElementById("myBtn");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText.innerHTML = "Read More"
        moreText.style.display = "none";
    } else {
        dots1.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    };
};

function myFunction1() {
    var dots2 =
    document.getElementById("dots2");
    var moreText1 =
    document.getElementById("more1");
    var btnText1 =
    document.getElementById("myBtn1");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText1.innerHTML = "Read More"
        moreText1.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText1.innerHTML = "Read Less";
        moreText1.style.display = "inline";
    };
};


function myFunction2() {
    var dots3 =
    document.getElementById("dots3");
    var moreText2 =
    document.getElementById("more2");
    var btnText2 =
    document.getElementById("myBtn2");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText2.innerHTML = "Read More"
        moreText2.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText2.innerHTML = "Read Less";
        moreText2.style.display = "inline";
    };
};

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=> {
    var dots = elem.getAttribute("data.dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++) {
        points += `<div class="points" style="--i:${i}, --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++);
        pointsMarked[i].classList.add('marked')
})




