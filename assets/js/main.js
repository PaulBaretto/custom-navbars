

const body = document.querySelector('body');
const header = document.querySelector('#header-ex-1')
let searchWrapper = document.querySelector('.nb-search');
let searchBtn = document.querySelector('#nb-search-open');
let navMenu = document.querySelector('.nb-collapse-content');
let navToggle = document.querySelector('.nb-toggler')
const ball = document.querySelector(".ball");
let box = document.querySelector(".nb-collapse-content");
let menuUl = navMenu.querySelector('ul');
let menuLi = menuUl.querySelectorAll('li')

// adding class on scroll *class 1*
window.addEventListener('scroll', onscroll_function);
function onscroll_function(){
    if (window.scrollY > 90){
        body.classList.add('page-scrolled');
    } else {
        body.classList.remove('page-scrolled')
    }
}
// * class 2 *
window.addEventListener('scroll', onscroll_function02);
function onscroll_function02(){
    if (window.scrollY > 100){
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed')
    }
}

// toggleing a class onclick of search icon to searchWrapper
searchBtn.addEventListener('click', (e) => {
    searchWrapper.classList.toggle('search_is_clicked')
})

// toggleing a class onlick of hamber BTN 
navToggle.addEventListener('click', (e) => {
    body.classList.toggle('overflow-y-0')
    navMenu.classList.toggle('show-nav');
    let Icon = document.querySelector('#test')
    console.log(Icon)
    if (navMenu.classList === 'show-nav'){
        Icon.className ='fa-solid fa-xmark';
    }else{
        Icon.className ='fa-solid fa-bars';
    }
        // if(body.classList.contains = 'overflow-y-o'){
        //     // if(e.target !== navMenu)`
        //     body.classList.remove('overflow-y-0')
        //     navMenu.classList.remove('show-nav')
        // }
})

// ball move on mouse for nav
let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.09;


function animate(){
  
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  
  
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  
  ball.style.left = ballX + "px";

  
  requestAnimationFrame(animate);
}
animate();

// box.addEventListener("mousemove", function(event){
//     if (ball) {
//           mouseX = event.pageX;
//   mouseY = event.pageY;
//     }else{
//         ball.style.display='none';
//     }
// })
box.addEventListener("mouseover", () => {
  mouseX = event.pageX;
  mouseY = event.pageY;
})
box.addEventListener('mouseout', (event) => {
  // ball.style.display = 'none';
      mouseX = -10;
})
