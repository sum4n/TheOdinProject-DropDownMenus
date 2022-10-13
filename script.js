// Element which toggles the menu with click must have its 1st class
// name '.togglerClick'.

// Toggler elements' and toggled elements' 2nd class must match each
// other to establish relation.

// Toggler elements must come before toggled elements on html.

window.addEventListener('click', e => {
    // Only works on elements with '.togglerClick' class.
    if (e.target.classList.contains('togglerClick')) {
        let targetClass = e.target.classList[1];
        // Toggler must come before toggled elements on html.
        let menuItem = document.getElementsByClassName(targetClass)[1];
        showMenu(menuItem, e);
    }
});

function showMenu(menuDiv, parent) {
    let position = parent.target.offsetLeft + 'px';
    // Toggle .menu-display class on menuDiv.
    menuDiv.classList.toggle("menu-display");
    menuDiv.style.left = position;
    menuDiv.style.backgroundColor = window.getComputedStyle(parent.target).backgroundColor;
}