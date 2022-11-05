// Hide/Show Navigation Menu
const showButton = document.querySelector('.show-button');
const navLinks = document.querySelectorAll('.nav-link');
const linksList= document.querySelector('ul');

showButton.addEventListener('click', () => {
  if (linksList.classList.contains('close')) {
    linksList.classList.remove('close');
    linksList.classList.add('open');
    showButton.innerHTML = 'Hide';
  } else {
    linksList.classList.remove('open');
    linksList.classList.add('close');
    showButton.innerHTML = 'Show';
  }
});

navLinks.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    nav.classList.remove('open');
    nav.classList.add('close');
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
const nav = document.querySelector('nav');
const allSections = document.querySelectorAll('section');
const selectedSection = document.querySelector('.selected-section');
const specialSections = ['section-before-jumplink', 'section-after-jumplink', 'section-after-jumplink-two']

const jumpLinkSectionsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
        
    if(!entry.isIntersecting) return 
    
    if(!specialSections.includes(entry.target.className)) {
      selectedSection.innerHTML = entry.target.innerText
      showButton.classList.remove('hidden');
      showButton.classList.add('block');    
    } else if(entry.target.className === 'section-after-jumplink') {
      nav.classList.remove('open');
      nav.classList.add('close');
      showButton.innerHTML = 'Show';
    } else if (entry.target.className === 'section-before-jumplink') {
      showButton.classList.add('hidden');
    }
  });
}, {
  rootMargin: `${document.querySelector('nav').offsetHeight}px`,
  threshold: 1
});

allSections.forEach((section) => {
  jumpLinkSectionsObserver.observe(section);
});

