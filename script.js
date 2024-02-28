let mainContent = document.querySelector('.column');
let secondaryContent = document.querySelector('.column2');


let checked = 1;
// let themeColor = document.querySelector('body').style.backgroundColor;


document.querySelector('.toggleContainer #toggle').addEventListener('click', e => {
    if (checked==1){
        mainContent.style.display = e.target.checked ? 'block' : 'none';
        secondaryContent.style.display = e.target.checked ? 'none' : 'block';
        document.querySelector('html').style.backgroundColor = "var(--dark)";
        checked=2;
    } else {
        mainContent.style.display = e.target.checked ? 'none' : 'block';
        secondaryContent.style.display = e.target.checked ? 'block' : 'none';
        document.querySelector('html').style.backgroundColor = "var(--light)";
        checked=1;
    }

    if (document.querySelector('html').style.backgroundColor.equals("var--dark")) {
        doc
    }
    
})
