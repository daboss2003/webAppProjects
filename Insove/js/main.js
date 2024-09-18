// mobile nav
const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpenedClass);

    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);
  }
});

// Swiper

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

   scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// faq
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const faqBtn = item.querySelector(".faq__btn");

  item.addEventListener("click", () =>{
    const isOpen = item.classList.toggle('open')
    const iconClass = isOpen ? "ri-subtract-fill" : "ri-add-fill";
    const iconElement = faqBtn.querySelector('i')
    iconElement.classList = `${iconClass} text-2xl`
  })
});

document.querySelector('.year').innerHTML = new Date().getFullYear();

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600
});
sr.reveal('.hero__text', { origin: 'top' });
sr.reveal('.hero__img');
sr.reveal('.stats__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'top',
});

sr.reveal('.services');
sr.reveal('.services__top');

sr.reveal('.services__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

sr.reveal('.appointment__title');
sr.reveal('.appointment__form');
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');
sr.reveal('.team__title');
sr.reveal('.team__slider');
sr.reveal('.faq__title');
sr.reveal('.faq__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom', 
   
});

sr.reveal('.departments__bg');
sr.reveal('.departments__container');
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});


sr.reveal('.brands__logo', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

sr.reveal('.footer__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});



