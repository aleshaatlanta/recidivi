let nav = document.querySelector ('.header__nav')
let navTogglee = document.querySelector ('.navToggle')

navTogglee.addEventListener ('click', function () {
    nav.classList.toggle ('header__show')
})

let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let showMeScroll = scrollY;

    if (showMeScroll > 765) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow')
    }

    console.log(showMeScroll);
});

console.log(header);