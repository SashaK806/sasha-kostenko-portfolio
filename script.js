
//ON LOAD
document.querySelector('.collapse').style.display = "none";
let collapseState = "flex";
window.onscroll = function() {scrollFunction()};

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

//SHOW 'TO TOP'
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.toTop').style.display = "block";
    } else {
      document.querySelector('.toTop').style.display = "none";
    }
  }

//SCROLL TO TOP
document.querySelector('.toTop').addEventListener('click', e => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

//EXPAND MOBILE MENU
// document.querySelector('.mobileMenu').addEventListener('click', e => {
//   document.querySelector('.fixedContainer').style.visibility = visible;
//   document.querySelector('p').innerHTML = "AAAA";
// })
