let clickBtn = document.getElementById("click");
let hoverBtn = document.getElementById("hover");

let menuitem1 = document.querySelector(".menu-container1");
let menuitem2 = document.querySelector(".menu-container2");

clickBtn.addEventListener('click', () => {
    showMenu(menuitem1)
});

hoverBtn.addEventListener('click', () => {
    showMenu(menuitem2)
});

function showMenu(menuDiv) {
    if (menuDiv.style.display !== "block") {
        menuDiv.style.display = "block";
    } else {
        menuDiv.style.display = "none";
    }
}