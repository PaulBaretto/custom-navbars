

const body = document.querySelector('body');

window.addEventListener('scroll', onscroll_function);

function onscroll_function(){
    if (window.scrollY > 3){
        body.classList.add('page-scrolled');
    } else {
        body.classList.remove('page-scrolled')
    }
}