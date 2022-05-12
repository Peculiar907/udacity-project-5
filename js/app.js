/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionMenu = document.querySelectorAll("section");
const navMenu= document.querySelector('#navbar__list')


  
// build the nav
function createNav() {
   sectionMenu.forEach ((section) => {
    itemList += ` <li> <a class = "navbar__menu menu__link " href= #${section.id}" > ${section.dataset.nav}  </a></li>`; 
   } );
   
   navMenu.innerHTML= itemList;
   
   
}

let itemList = '';
createNav();



       
// Add class 'active' to section when near top of viewport
 function createActive (section){
   let idTag = section.getAttribute('id');
   document.querySelector(`#${idTag}`).classList.add('your-active-class');

   
}

function eraseActive (section) {
   let idTag= section.getAttribute('id');
   document.querySelector(`#${idTag}`).classList.remove('your-active-class');

}


document.addEventListener ('scroll', function() {
   sectionMenu.forEach ((section) => {
   let sectionOff = section.getBoundingClientRect();
   if (sectionOff.top <= 120 && sectionOff.bottom >= 120){
      createActive(section)
   } else{
      eraseActive(section)
   }
});
});




// Scroll to anchor ID using scrollTO event
window.scroll({
   top:0,
   left:0,
   behavior:'smooth'
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click

// Set sections as active


