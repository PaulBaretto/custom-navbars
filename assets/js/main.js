let navToggler = document.querySelector(".nb-toggler");
let smNav = document.querySelector(".nav-7-mobile");
let navTogglerIcon = document.querySelector(".nb-toggler");
let innerMenu = document.querySelectorAll(".inner_menu");
let eventOnBody = document.querySelector('body')

// show/hide Mobile Nav
navToggler.addEventListener("click", show_hide_Nav);
function show_hide_Nav() {
  console.log(smNav);
  smNav.classList.toggle("navshow");
}

// open submenu code
function openSubMenu(e, innerMenu) {}
innerMenu.forEach((eachInnerMenu) => {
  eachInnerMenu.addEventListener("click", (e) => {
    // console.log(innerMenu);
    innerMenu.forEach((element) => {
      element.classList.remove("showInnerSubMenu");
      element.classList.remove("activeMenu");
    });
    let menuLinkParent = e.target.closest('li');
    let dropdownIcon = menuLinkParent.querySelector('.nav-icon img')
    console.log(dropdownIcon);

    // let dropdownIcon = e.target.parentElement.querySelector(".nav-icon").children[0];
    // console.log(dropdownIcon);
    console.log(e.target.tagName);
    if (e.target.tagName === "A" || e.target.tagName === "DIV" || e.target.tagName === "I" || e.target.tagName === "SPAN") {
      // console.log(e.target.closest("li"));
      e.target.closest("li").classList.remove("showInnerSubMenu");
      // e.target.closest('li').classList.remove("activeMenu");

      if (!e.target.closest("li").classList.contains("showInnerSubMenu")) {
        e.target.closest("li").classList.add("showInnerSubMenu");
        e.target.closest("li").classList.add("activeMenu");
      }

     

      // console.log("true");
      // console.log(e.target);
    } else {
      // console.log("fales");
    }
  });
});

let whatWeOffer = document.querySelector('.whatWeOffer');
console.log(whatWeOffer);
whatWeOffer.addEventListener('click', (e) => {
  e.target.closest('li').classList.add('showWhatWeOffer')
  // console.log(e.target);
})

let MegaNavbackButton = document.querySelector('.back_button')
MegaNavbackButton.addEventListener('click', () => {
  // console.log('test');
  whatWeOffer.classList.remove('showWhatWeOffer')
  // console.log(whatWeOffer);
})

eventOnBody.addEventListener('click', () => {
  if(smNav.classList.contains = 'navshow'){
    console.log('Nav is opend');
  }
})