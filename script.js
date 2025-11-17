document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme); 
        });
    }

    const heroSection = document.getElementById('hero');
    
    if (heroSection) {
        const slides = document.querySelectorAll('#hero > .slide');
        
        if (slides.length > 0) {
            let currentSlide = 0;
            const slideInterval = 5000; 

            function nextSlide() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                
                slides[currentSlide].classList.add('active');
            }

            setInterval(nextSlide, slideInterval);
        }
    }

    const contactForm = document.getElementById('contact-form');
    const formError = document.getElementById('form-error');

    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            formError.style.display = 'none';
            formError.textContent = '';

            if (name === '' || email === '' || message === '') {
                formError.textContent = 'Per favore, compila tutti i campi.';
                formError.style.display = 'block';
            } else if (!isValidEmail(email)) {
                formError.textContent = 'Per favore, inserisci un indirizzo email valido.';
                formError.style.display = 'block';
            } else {
                alert('Messaggio inviato con successo!');
                contactForm.reset(); 
            }
        });
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});