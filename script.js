// document.getElementsByClassName("work").addEventListener("mouseover", imgMouseOver);
document.getElementsByClassName("sparkle").addEventListener("mouseover", sparkle);

// function imgMouseOver() {
//     document.getElementsByClassName("name").style.visibility = "visible";
// }

function sparkle() {
    const letter = document.getElementsByClassName("sparkle");
    const sparkle = "*";
    letter.replaceWith(sparkle);
}