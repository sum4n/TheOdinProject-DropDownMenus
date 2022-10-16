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
    if (menuDiv.style.visibility != "visible") {
        menuDiv.style.visibility = "visible";
        // Set menuDiv to position right below clicked button.
        menuDiv.style.left = position;
        // console.log(menuDiv.firstElementChild.offsetHeight);
        
        // Transition with changing the opacity value.
        menuDiv.style.opacity = "100%";
        
        // Transition with transform.
        // menuDiv.style.transform = `translate(${position})`;

        menuDiv.style.backgroundColor = window.getComputedStyle(parent.target).backgroundColor;
    } else {
        menuDiv.style.visibility = "hidden";
        menuDiv.style.opacity = "0";

        // menuDiv.style.transform = "translate(0%, 0%)";
    }
    
}