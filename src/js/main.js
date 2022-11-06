import { hideShowElement } from "./functions/common";

// Navigation Listeners
const showButton = document.querySelector('.show-button');
const navLinks = document.querySelectorAll('.nav-link');
const linksList= document.querySelector('.nav-list');

showButton.addEventListener('click', () => {
  if (linksList.classList.contains('close')) {
    hideShowElement(linksList,'close','open')
    showButton.innerHTML = 'Hide';
  } else {
    hideShowElement(linksList,'open','close')
    showButton.innerHTML = 'Show';
  }
});

navLinks.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    hideShowElement(linksList,'open','close')
    showButton.innerHTML = 'Show';
  });
})


// Smooth Progress Bar
const sectionJumplink = document.querySelector('.section-after-jumplink');

window.onscroll = function () {
  let scrolled = (window.pageYOffset / sectionJumplink.offsetTop) * 100;
  document.getElementById('progressBar').style.width = scrolled + '%';
}


// Intersections
const allSections = document.querySelectorAll('section');
const selectedSection = document.querySelector('.selected-section');
const specialSections = ['section-before-jumplink', 'section-after-jumplink', 'section-after-jumplink-two']

const jumpLinkSectionsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
        
    if(!entry.isIntersecting) return 
    
    if(!specialSections.includes(entry.target.className)) {
      hideShowElement(showButton,'hidden','block')
      selectedSection.innerHTML = entry.target.innerText
    } else {
      hideShowElement(linksList,'open','close')
      hideShowElement(showButton,'block','hidden')
      showButton.innerHTML = 'Show'
    }
  });
}, {
  rootMargin: `${document.querySelector('nav').offsetHeight}px`,
  threshold: 1
});

allSections.forEach((section) => {
  jumpLinkSectionsObserver.observe(section);
});