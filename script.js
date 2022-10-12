let clickBtn = document.getElementById("click");
let hoverBtn = document.getElementById("hover");

let menuitem1 = document.querySelector(".menu-container1");
let menuitem2 = document.querySelector(".menu-container2");

clickBtn.addEventListener('click', (e) => {
    // Get element's position with offsetLeft.
    showMenu(menuitem1, e);
});

hoverBtn.addEventListener('click', (e) => {
    showMenu(menuitem2, e);
});

function showMenu(menuDiv, parent) {
    let position = parent.target.offsetLeft + 'px';

    // if (menuDiv.style.display !== "block") {
    //     menuDiv.style.display = "block";
    //     menuDiv.style.left = position;
    //     menuDiv.style.backgroundColor = window.getComputedStyle(parent.target).backgroundColor;
    // } else {
    //     menuDiv.style.display = "none";
    // }
    menuDiv.classList.toggle("menu-display");
    menuDiv.style.left = position;
    menuDiv.style.backgroundColor = window.getComputedStyle(parent.target).backgroundColor;
}