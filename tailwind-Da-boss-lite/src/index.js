const menu = document.getElementById('menu');
const userText = Array.from(document.querySelectorAll('.user-text'));
const userPic = Array.from(document.querySelectorAll('.user-pic'));
const main = document.querySelector('main');
document.getElementById('year').innerHTML = new Date().getFullYear();

window.addEventListener('click', (e) => {
    if (e.target.closest('.user-pic')) {
        const current = e.target.closest('.user-pic')
        userPic.forEach(item => item.classList.remove('active-pic'));
        userText.forEach(item => item.classList.remove('active-text'));
        current.classList.add('active-pic');
        userText[userPic.indexOf(current)].classList.add('active-text');

    }
    if (e.target.closest('.nav__links')) {
        menu.classList.add('hidden');
        main.classList.remove('blur__out');
        document.body.style.overflowY = 'auto';
    }
    if (e.target.closest('#close')) {
        menu.classList.add('hidden');
        main.classList.remove('blur__out');
        document.body.style.overflowY = 'auto';
    }
    if (e.target.closest('#hambuger')) {
        menu.classList.remove('hidden');
        main.classList.add('blur__out');
        document.body.style.overflowY = 'hidden';
    }
});


const toggleBtn = document.getElementById('toggleBtn');
const card__front = Array.from(document.querySelectorAll('.card__front'));
const card__back = Array.from(document.querySelectorAll('.card__back'));
toggleBtn.addEventListener('change', () => {
    card__front.forEach(item => item.classList.toggle('-rotate-y-180'));
    card__back.forEach(item => item.classList.toggle('rotate-y-180'));
})

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100)  header.classList.add('sticky-header');
    else header.classList.remove('sticky-header')
})