//waits for the HTML document to fully load before fetching a partial HTML file for the header using AJAX
document.addEventListener('DOMContentLoaded', function() {
    fetch('partials/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
            // Load the Header
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.addEventListener('click', function() {
                    var menu = document.querySelector('.menu');
                    if (menu) {
                        menu.classList.toggle('active');
                    } else {
                        console.error('The menu element was not found');
                    }
                });
            } else {
                console.error('The menu-toggle button was not found');
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    // Load the hero section
    fetch('partials/hero.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('hero-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading hero section:', error);
    });

    // Load the about section
    fetch('partials/about.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('about').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading hero section:', error);
    });
});

// Set up an event listener that waits for the entire content of the webpage to be loaded.
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('submit', function(event) {
        if (event.target.matches('#reservation-form')) {
            event.preventDefault(); // Prevent the default form submission
            alert('Ergebnisse werden geladen');
        }
    });
});