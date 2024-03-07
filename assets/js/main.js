    

let aboutRemove = document.querySelector('.nav-7-mobile')
aboutRemove.remove();
console.log(aboutRemove);



// let body = document.querySelector('body')
// let navHeader = document.getElementById('nav8-header');
// let navToggler = navHeader.querySelector('.nb-toggler');
// let smNav = navHeader.querySelector('.nav-mobile-canvas');
// let open_sub = document.querySelector('.nb-subnav-mob')
// let mob_sub = document.getElementById("sm-sub")
// let open_mega = document.querySelector('.nb-meganav-mob')
// let mob_mega = document.getElementById("sm-mega")
// let open_lists = document.querySelectorAll('.nbmeg-list-mob')
// let mob_list = document.getElementById("sm-list")


// mob_sub.addEventListener('click', () => {
//     open_sub.classList.toggle ('nav-opened')
// })

// mob_mega.addEventListener('click', () => {
//     open_mega.classList.toggle ('nav-opened')
// })


// open_lists.forEach(open_list => {
//     open_list.addEventListener('click', () =>{
//         open_list.classList.toggle ('list-opened')
//     })
// });

// let body = document.querySelector('body')
// let navHeader = document.getElementById('nav8-header');
// let navToggler = navHeader.querySelector('.nb-toggler');
// let smNav = navHeader.querySelector('.nav-mobile-canvas');
// let open_sub = document.querySelector('.nb-subnav-mob')
// let mob_sub = document.getElementById("sm-sub")
// let open_mega = document.querySelector('.nb-meganav-mob')
// let mob_mega = document.getElementById("sm-mega")
// let open_lists = document.querySelectorAll('.nbmeg-list-mob')
// let mob_list = document.getElementById("sm-list")
// let sm_nav_show_btn = document.querySelector('.nb-toggler');


// mob_sub.addEventListener('click', () => {
//     open_sub.classList.toggle ('nav-opened')
// })

// mob_mega.addEventListener('click', () => {
//     open_mega.classList.toggle ('nav-opened')
// })


// open_lists.forEach(open_list => {
//     open_list.addEventListener('click', () =>{
//         open_list.classList.toggle ('list-opened')
//     })
// });


// sm_nav_show_btn.addEventListener('click', () => {
//     smNav.classList.toggle('sm-show-nav-items')
//     let navWrap = document.querySelector('.nav-wrap');
//     // console.log(navWrap)
//     if (smNav.classList.contains('sm-show-nav-items')){
//         sm_nav_show_btn.textContent = 'Close';
//         navWrap.style.cssText = 'border-radius:20px 20px 0px 0px';
//     }else{
//         sm_nav_show_btn.textContent = 'Menu';
//         navWrap.style.cssText = 'border-radius:20px 20px 20px 20px';
//     }
// })


let navToggler = document.querySelector('.nb-toggler');
let smNav = document.querySelector('.nav-mobile-canvas');
let navTogglerIcon = document.querySelector('.nb-toggler')

// show/hide Mobile Nav 
navToggler.addEventListener('click',  show_hide_Nav);

function show_hide_Nav(e){
    smNav.classList.toggle('navshow')
    navToggler.classList.toggle('navclose')
}

jQuery('.nb-hover-after.nav-link ').hover(function(){
    jQuery(this).trigger('click');
});

// // nav-6 menu code 
// jQuery(".nav-7-item-has-child .nav-7-submenu").after("<i class='nav-7-arrow'></i>");

//     //Mobile menu
//     jQuery('.nav-7-mob-btn').on('click', function () {

//         if (jQuery(this).hasClass('active')) {
//             jQuery(this).removeClass('active');

//         } else {
//             jQuery(this).addClass('active');
//         }

//         if (jQuery('.nav-7-mobile').hasClass('active')) {
//             jQuery('.nav-7-mobile').removeClass('active');

//         } else {
//             jQuery('.nav-7-mobile').addClass('active')
//         }

//     })

//     //Mobile disable Hover
//     if (jQuery(window).width() < 1100) {

//         jQuery(".nav-7-item-has-child .nav-7-submenu .nav-7-mega-menu-wrap").before("<h4 class='menu-back'>Back</h4>");

//         jQuery(".nav-7-item-has-child:not(.nav-7-item-has-mega-menu) .nav-7-submenu > li:first-child").before("<h4 class='menu-back'>Back</h4>");

//         //mobile Submenu click
//         jQuery('.nav-7-item-has-child .nav-7-arrow').on('click', function () {
//             jQuery(this).parent().addClass('active');
//             console.log('test')
//         })

//         //mobile Submenu click
//         jQuery('.nav-7-item-has-child .nav-7-title').on('click', function () {
//             jQuery('.nav-7-mega-list').removeClass('active');
//             jQuery(this).parent().find('.nav-7-mega-list').addClass('active');
//         })

//         jQuery('.nav-7-item-has-child.nav-7-item-has-mega-menu .menu-back').on('click', function () {
//             jQuery(this).parent().parent().parent().removeClass('active');
//         })

//         jQuery('.nav-7-item-has-child:not(.nav-7-item-has-mega-menu) .menu-back').on('click', function () {
//             jQuery(this).parent().parent().removeClass('active');
//         })

//     }