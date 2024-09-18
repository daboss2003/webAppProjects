const hamBuger = document.getElementById('hambuger');
const closeButton = document.getElementById('close-btn');
const navBar = document.querySelector('#navbar');
const menuList = Array.from(document.querySelectorAll('.menu'));
hamBuger.onclick = function () {
    navBar.classList.remove('hidden');
}

closeButton.onclick = function () {
    navBar.classList.add('hidden');
}

menuList.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.add('hidden');
    })
});

const tabs = document.querySelectorAll('.tabs_wrap ul li');
const allTabs = document.querySelector('#all');
const foodTabs = document.querySelector('#food');
const snackTabs = document.querySelector('#snack');
const beverageTabs = document.querySelector('#beverage');
const menu = document.getElementById('menu');

const tabObj = [
    { tab: allTabs, type: 'all' },
    { tab: foodTabs, type: 'food' },
    { tab: snackTabs, type: 'snack' },
    { tab: beverageTabs, type: 'beverages' }
];

tabObj.forEach(tab => {
    tab.tab.addEventListener('click', () => {
        Array.from(menu.querySelectorAll('.item_wrap')).forEach(item => {
            item.classList.add('hidden');
        });

        if (tab.type === 'all') {
            Array.from(menu.querySelectorAll('.item_wrap')).forEach(item => {
                item.classList.remove('hidden');
            });
        }
        else {
            Array.from(menu.querySelectorAll(`.${tab.type}`)).forEach(item => {
                item.classList.remove('hidden');
            });
        }
    })
})

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
    })
})


document.getElementById('year').innerHTML = new Date().getFullYear();

const scrollup = () => {
    const scrollBtn = document.getElementById('scroll-up');
    if (this.scrollY >= 250) {
        scrollBtn.classList.remove('-bottom-1/2');
        scrollBtn.classList.add('bottom-4');
    }
    else {
        scrollBtn.classList.add('-bottom-1/2');
        scrollBtn.classList.remove('bottom-4');
    }
}

const changeHeader = () => {
    const header = document.querySelector('header');

    if (this.scrollY >= 50) {
        header.classList.add('border-b');
        header.classList.add('border-secondaryColor');
    }
    else {
        header.classList.remove('border-b');
        header.classList.remove('border-secondaryColor');
    }
}

window.addEventListener('scroll', () => {
    scrollup()
    changeHeader()
    activeLink()
});

const html = document.querySelector('html');
const themeToggle = document.querySelector('#theme-toggle');
if (localStorage.getItem('mode') === 'dark') {
    html.classList.add('dark');
    themeToggle.classList.replace('ri-moon-line', 'ri-sun-line');
}

const ToggleDarkMode = () => {
    html.classList.toggle('dark');
    if (themeToggle.classList.contains('ri-moon-line')) {
        themeToggle.classList.replace('ri-moon-line', 'ri-sun-line');
        localStorage.setItem('mode', 'dark');
    }
    else {
        themeToggle.classList.replace('ri-sun-line', 'ri-moon-line');
        localStorage.setItem('mode', 'light');
    }
}

themeToggle.addEventListener('click', ToggleDarkMode)

const activeLink = () => {
    const allSections = Array.from(document.querySelectorAll('section'));
    const navLink = Array.from(document.querySelector('#navbar').querySelectorAll('ul li a'));
    let current = 'home';

    allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    })
    navLink.forEach(item => {
        item.classList.remove('text-secondaryColor');
        if (item.href.includes(current)) {
            item.classList.add('text-secondaryColor')
        }
    });


}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home__image');
sr.reveal('.home__content', { origin: 'bottom' });
sr.reveal('.category__card', { interval: 300 });
sr.reveal('.promo__card-1', { origin: 'left' });
sr.reveal('.promo__card-2', { origin: 'right' });
sr.reveal('.about__img', { origin: 'bottom' });
sr.reveal('.about__content', { origin: 'top' });
sr.reveal('.menu__items', { origin: 'left' });
sr.reveal('.customer__review', { origin: 'right' });
sr.reveal('.footer');




