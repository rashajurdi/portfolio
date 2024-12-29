// JavaScript to make navbar sticky on scroll
window.onscroll = function() { stickyNav() };

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0'; // Start fade-out
    setTimeout(() => {
      preloader.style.display = 'none'; // Remove from DOM
    }, 500); // Match this timing with the CSS transition duration
  });
  
