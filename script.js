// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hero section fade-in animation
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');
});

// Navbar visibility toggle on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-100px"; // Hide navbar on scroll down
    } else {
        navbar.style.top = "0"; // Show navbar on scroll up
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Scroll reveal for sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('reveal');
        }
    });
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}


// Scroll-to-top button visibility toggle
const scrollToTopButton = document.createElement('div');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.innerHTML = '↑';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// script.js
document.getElementById('menuToggle').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
});

// Hide the preloader once the page is fully loaded
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});





