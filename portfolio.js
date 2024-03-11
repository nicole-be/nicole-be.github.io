// import smoothscroll from 'smoothscroll-polyfill';
// console.log("hello");

// document.addEventListener('DOMContentLoaded', function () {
//   // Function to scroll to a specific section
//   function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       smoothscroll.polyfill();
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }

//   // Adding event listeners to navbar links
//   document.getElementById('navabout').addEventListener('click', function (event) {
//     event.preventDefault();
//     scrollToSection('about');
//   });

//   document.getElementById('navprojects').addEventListener('click', function (event) {
//     event.preventDefault();
//     scrollToSection('projects');
//   });

//   document.getElementById('navcontact').addEventListener('click', function (event) {
//     event.preventDefault();
//     scrollToSection('contact');
//   });
// });


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  })
}
