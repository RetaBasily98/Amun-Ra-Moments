// This code enables a sticky navigation effect, which adds or removes the 'active' class to the nav element based on scroll position.

// Selects the navigation bar element with the class 'nav'
const nav = document.querySelector('.nav');

// Listens for the scroll event on the window and triggers the fixNav function when the user scrolls
window.addEventListener('scroll', fixNav);

function fixNav() {
    // Checks if the user has scrolled past a certain point (nav height + 150px)
    if (window.scrollY > nav.offsetHeight + 150) {
        // Adds the 'active' class to make the nav bar stick to the top or change style
        nav.classList.add('active');
    } else {
        // Removes the 'active' class when the user scrolls back up
        nav.classList.remove('active');
    }
}




