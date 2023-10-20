//sticky Header flip
const header = document.querySelector('.nav1-header');

window.addEventListener('scroll', onscroll_function);
function onscroll_function(){
    if (window.scrollY > 150){
        header.classList.add('nav-header-sticky');
    } else {
        header.classList.remove('nav-header-sticky');
    }
}
