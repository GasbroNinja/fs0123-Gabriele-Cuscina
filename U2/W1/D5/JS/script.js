

function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 350) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}

/* DA FIXARE IL BUTTON */

document.addEventListener('scroll', scrollValue);

function scrollValue1() {
    var navbar = document.getElementById('navbar');

if (scroll < 350) {
    navbar.classList.remove('ButtonC');
} else {
    navbar.classList.remove('ButtonC');
}

}

document.addEventListener('scroll', scrollValue);