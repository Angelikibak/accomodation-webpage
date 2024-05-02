document.addEventListener('DOMContentLoaded', function() {
    // Fetch partials and load them into the DOM
    fetch('partials/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
            initMenuToggle(); // Initialize menu toggle after header is loaded
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    fetch('partials/hero.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('hero-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading hero section:', error);
        });

    fetch('partials/about.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('about').innerHTML = html;
            initSwiper(); //initialize Swiper here after about section is loaded
        })
        .catch(error => {
            console.error('Error loading about section:', error);
        });
    
    fetch('partials/accommodations.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('accommodations').innerHTML = html;
    })
    .catch(error => {
        console.error('Error loading about section:', error);
    });

    fetch('partials/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer-container').innerHTML = html;
    })
    .catch(error => {
        console.error('Error loading footer:', error);
    });
    
    // Form submission event listener
    document.body.addEventListener('submit', function(event) {
        if (event.target.matches('#reservation-form')) {
            event.preventDefault(); // Prevent the default form submission
            alert('Ergebnisse werden geladen');
        }
    });
});

function initMenuToggle() {
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
}

function initSwiper() {
    // Ensure Swiper is only initialized if the required elements exist
    if(document.querySelector('.swiper')) {
        var mySwiper = new Swiper('.swiper', {
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            768: {
              enabled: false, // Disable Swiper at 768px and above
            }
          }
        });
    }
}
