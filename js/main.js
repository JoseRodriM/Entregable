let navMenu = document.getElementById('nav-list'),
    navToggle = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close');


if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


