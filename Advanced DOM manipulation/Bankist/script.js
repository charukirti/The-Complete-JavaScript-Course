'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});





btnScrollTo.addEventListener('click', (e) => {
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);

  console.log(e.target.getBoundingClientRect())

  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset); 

  console.log('Height & Width', document.documentElement.clientHeight, document.documentElement.clientWidth);

  section1.scrollIntoView({behavior: 'smooth'});
  
});


// pagenavigation

// document.querySelectorAll('.nav__link').forEach((el)=>{
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })


// 1. add event listener to common parent element

document.querySelector('.nav__links').addEventListener('click', function(e){
  console.log(e.target);

  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    // console.log('LINK');
        const id = e.target.getAttribute('href');
        // console.log(id);
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})


// tabbed component
const tab = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // gueard class
  if(!clicked) return;

  // active tab

 tab.forEach(t => t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')
  
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})


// Menu fade animation

const handleOver = function(e, opacity) {
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');


    siblings.forEach(el => {
      if(el != link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}


nav.addEventListener('mouseover', handleOver.bind(0.5))

nav.addEventListener('mouseout', handleOver.bind(1))



// Sticky Navigation
// const initCords = section1.getBoundingClientRect();
// console.log(initCords);

// window.addEventListener('scroll', function(){
  

//   if(window.scrollY > initCords.top) nav.classList.add('sticky') 
//   else nav.classList.remove('sticky')
// })


// Sticky navigation using intersection API

// const obsCallback = function(entries, observer) {
//     entries.forEach(entry=>{
//       console.log(entry);
//     })
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const obeserver = new IntersectionObserver(obsCallback, obsOptions);

// obeserver.observe(section1)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function(entries) {
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting)
  nav.classList.add('sticky') 
  else 
  nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});



headerObserver.observe(header);


// Reveal on scroll
const allSections = document.querySelectorAll('.section')

const revealSection = function(entries, obeserver) {
  const [entry]=entries;
  // console.log(entry);

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden')

  obeserver.unobserve(entry.target)
}

const sectionObeserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function(section){
  sectionObeserver.observe(section);
  // section.classList.add('section--hidden')
})


// Lazy loading images


const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;

  // replace sc with data.src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  })

  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));


// Creating slider component

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();














/* ################## Learnings ################ */

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(e){
//   // alert('addEventlistener is working')

// });


// // Event bubbling and propegation

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// // console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', 
// function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// })


// document.querySelector('.nav__links').addEventListener('click', 
// function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// })


// document.querySelector('.nav').addEventListener('click', 
// function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// })


/* =========== DOM Traversing ============== */

// const h1 = document.querySelector('h1');
// console.log(h1);

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'Red'
// h1.lastElementChild.style.color = 'orangered'

// // going upwords

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background='var(--gradient-secondary)'
// h1.closest('h1').style.background='var(--gradient-primary)'

// // going sideways

// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

document.addEventListener('DOMContentLoaded', function(e){
  console.log('HTML parsed and dom tree built', e);
})


window.addEventListener('load', function(e){
  console.log('Page fully loaded', e);
})

window.addEventListener('beforeunload', function(e){
  e.preventDefault()
  console.log(e);
  e.returnValue = ''
})