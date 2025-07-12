// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('header__hamburger--active');
    mobileNav.classList.toggle('header__mobile-nav--active');
});

// Close mobile nav when clicking links
const mobileNavLinks = document.querySelectorAll('.header__mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('header__hamburger--active');
        mobileNav.classList.remove('header__mobile-nav--active');
    });
});

// Smooth scrolling
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = 60;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

function showMessage(message, isSuccess = true) {
    contactMessage.textContent = message;
    contactMessage.className = `contact__message ${isSuccess ? 'contact__message--success' : 'contact__message--error'}`;
    contactMessage.style.display = 'block';
    
    setTimeout(() => {
        contactMessage.style.display = 'none';
    }, 5000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Validation
    if (!name || !email || !message) {
        showMessage('Please fill in all fields.', false);
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', false);
        return;
    }
    
    // Success message
    showMessage('Thank you for your message! We will get back to you soon.', true);
    contactForm.reset();
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.opacity = '0.95';
    } else {
        header.style.opacity = '1';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Initial body opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';