// Function to set 'active' class on the current page's link
function setActiveLink() {
    const currentPath = window.location.pathname;

    // Iterate through the navigation links
    const links = document.querySelectorAll('.topnav a');
    links.forEach(link => {
        // Check if the current path ends with the link's href
        if (currentPath.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
});
