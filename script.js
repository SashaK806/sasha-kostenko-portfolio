//HIDE PAGE UNTIL IT LOADS  
document.querySelector('body').style.display = "none";
document.addEventListener("DOMContentLoaded", function (){
  document.querySelector('body').style.display = "block";
})

//ON LOAD
let collapseState;
// document.body.style.cursor = "images/sun-icon.png";
if (!(document.querySelector('.collapse') == null)) {
  document.querySelector('.collapse').style.display = "none";
  collapseState = "flex";
}
window.onscroll = function() {scrollFunction()};
window.onscroll = function() {colorOnScroll()};



//EXPAND READ MORE
document.querySelector('.readMore').addEventListener('click', e => {
    document.querySelector('.collapse').style.display = collapseState; 
    if (collapseState==="flex"){  //If description is collapsed, make it visible.
        collapseState = "none";
        document.querySelector('.readMore').innerHTML = "Read Less";
    } else { //If description is visible, collapse it.
        collapseState = "flex";
        document.querySelector('.readMore').innerHTML = "Read More";
    }
})

//SHOW 'TO TOP' and change NAV BAR COLOR on SCROLL
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // document.querySelector('.toTop').style.display = "block";
      // document.querySelector('.fixedContainer').style.backgroundColor = "var(--rouge)";
    } else {
      // document.querySelector('.toTop').style.display = "none";
      // document.querySelector('.fixedContainer').style.backgroundColor = "ffffff";
    }
  }

//CHANGE NAV BAR COLOR ON SCROLL
function colorOnScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('.fixedContainer').style.backgroundColor = "var(--gold)";
      document.querySelector('.fixedContainer').style.transition = "background-color 0.5s ease";
      document.querySelector('.fixedContainer span').style.color = "var(--dark)";
      
      
      //transition: background-color 1s ease;
    } else {
      document.querySelector('.fixedContainer').style.backgroundColor = "var(--light)";
      document.querySelector('.fixedContainer span').style.color = "var(--rouge)";
    }
}




//SCROLL TO TOP
document.querySelector('.toTop').addEventListener('click', e => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

//FADE ELEMENTS IN

// var element = document.querySelector('.work');
// function unfade(element) {
//   var op = 0.1;  // initial opacity
//   element.style.display = 'block';
//   var timer = setInterval(function () {
//       if (op >= 1){
//           clearInterval(timer);
//       }
//       element.style.opacity = op;
//       element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//       op += op * 0.1;
//   }, 10);
// }

//EXPAND MOBILE MENU
// document.querySelector('.mobileMenu').addEventListener('click', e => {
//   document.querySelector('.fixedContainer').style.visibility = visible;
//   document.querySelector('p').innerHTML = "AAAA";
// })
