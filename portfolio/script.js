/*================================================toggle icon================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================================================scroll sections active links================================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*================================================sticky navbar================================*/
    let header = document.queryselector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
/*================================================remove toggle icon and navbar when click the link================================*/
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

};
/*================================================scroll reveal================================*/
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:'2000',
    delay:200,

});
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });